import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Attraction } from "./attraction.model";
import NormalizeString from "../utils/normalizeString";
import { User } from "src/interface/User";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";
import { CategoryService } from "../category/category.service";
import { RegionService } from "../region/region.service";
import { CityService } from "../city/city.service";

@Injectable()
export class AttractionService {
  constructor(
    @InjectModel("Attraction")
    private readonly attractionModel: Model<Attraction>,
    private readonly actionHistoryService: ActionHistoryService,
    private readonly categoryService: CategoryService,
    private readonly regionService: RegionService,
    private readonly cityService: CityService
  ) {}

  async getHighlightedFromRegion(regionKey: string) {
    const region = await this.regionService.getSingleRegion(regionKey);
    console.log(region);
    const attractions = await this.attractionModel
      .find({ region: region._id, highlighted: true })
      .exec();
    return {
      items: attractions,
    };
  }

  async getHighlightedFromCity(cityKey: string) {
    const city = await this.cityService.getSingleCity(cityKey);
    const attractions = await this.attractionModel
      .find({ city: city._id, highlighted: true })
      .exec();
    return {
      items: attractions,
    };
  }

  async getHighlightedFromCategoryByItemKey(attractionKey: string) {
    const attraction = await this.attractionModel.findOne({
      key: attractionKey,
    });
    const attractions = await this.attractionModel
      .find({ category: attraction.category, highlighted: true })
      .exec();
    return {
      items: attractions,
    };
  }

  async getAllAttractionsFromCategory(category: string) {
    const categories = await (
      await this.categoryService.getCategories("attractions")
    ).filter((item) => item.name === category);
    const attractions = await this.attractionModel
      .find({ category: categories[0]._id })
      .exec();
    return {
      aboveItems: categories.map((item) => ({
        _id: item._id,
        name: item.name,
      })),
      items: attractions,
    };
  }

  async getAllAttractions() {
    const attractions = await this.attractionModel.find().exec();
    const categories = await this.categoryService.getCategories("attractions");
    return {
      items: attractions,
      aboveItems: categories.map((item) => ({
        _id: item._id,
        name: item.name,
      })),
    };
  }

  async getAllAttractionsFromRegion(regionKey: string) {
    const region = await this.regionService.getSingleRegion(regionKey);
    const attractions = await this.attractionModel
      .find({ region: region._id })
      .exec();
    return {
      items: attractions,
      aboveItems: [
        {
          _id: region._id,
          name: region.name,
          key: region.key,
        },
      ],
    };
  }

  async getAllHighlightedAttractions() {
    const attractions = await this.attractionModel
      .find({ highlighted: true })
      .exec();
    const categories = await this.categoryService.getCategories("attractions");
    return {
      items: attractions,
      aboveItems: categories.map((item) => ({
        _id: item._id,
        name: item.name,
        key: item.key,
      })),
    };
  }

  async getAllFromCity(cityKey: string) {
    const city = await this.cityService.getSingleCity(cityKey);
    const attractions = await this.attractionModel
      .find({ city: city._id })
      .exec();
    return {
      aboveItems: [
        {
          _id: city._id,
          name: city.name,
          key: city.key,
        },
      ],
      items: attractions,
    };
  }

  async getSingleAttraction(key: string) {
    const attraction = await this.findAttraction(key);
    return attraction;
  }

  private async findAttraction(key: string): Promise<Attraction> {
    let attraction;
    try {
      attraction = await this.attractionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find attraction.");
    }
    if (!attraction) {
      throw new NotFoundException("Could not find attraction.");
    }
    return attraction;
  }

  async createAttraction(data: Attraction, user: User) {
    let res;
    const existAttraction = await this.attractionModel
      .findOne({
        $or: [
          { name: data.name },
          { url: NormalizeString(data.name) },
          { key: NormalizeString(data.name) },
        ],
      })
      .exec();

    if (isNull(existAttraction)) {
      const newAttraction = new this.attractionModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        region: data.region,
        city: data.city,
        category: data.category,
        img: data.img,
        highlighted: data.highlighted,
        otherData: data.otherData,
      });
      res = await newAttraction.save();
      this.actionHistoryService.addNewItem({
        section: "attractions",
        name: data.name,
        url: `/admin/attractions/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Attraction is exist.", 409);
    }

    return res;
  }

  async removeAttraction(id: string, user: User) {
    let res;

    try {
      const removedAttraction = await this.attractionModel.remove({ _id: id });
      if (removedAttraction.deletedCount > 0) {
        res = {
          statusCode: 200,
          message: "Successfully deleted.",
        };
        this.actionHistoryService.addNewItem({
          section: "attractions",
          name: `none`,
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedAttraction.deletedCount === 0) {
        throw new HttpException("Could not remove attraction.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove attraction.", 409);
    }

    return res;
  }

  async updateAttraction(key: string, data: Attraction, user: User) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        url: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        region: data.region,
        city: data.city,
        category: data.category,
        img: data.img,
        highlighted: data.highlighted,
        otherData: data.otherData,
      };

      const updatedAttraction = await this.attractionModel.updateOne(
        { key },
        newData
      );
      if (updatedAttraction.nModified > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "attractions",
          name: data.name,
          url: `/admin/attractions/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedAttraction.n === 0) {
        throw new HttpException("Could not update attraction.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update attraction.", 409);
    }

    return res;
  }
}
