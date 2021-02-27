import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Attraction } from "./attraction.model";
import NormalizeString from "../utils/normalizeString";
import { User } from "src/interface/User";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";

@Injectable()
export class AttractionService {
  constructor(
    @InjectModel("Attraction")
    private readonly attractionModel: Model<Attraction>,
    private readonly actionHistoryService: ActionHistoryService
  ) {}

  async getBestAttractionsFromRegion(region: string) {
    const attractions = await this.attractionModel
      .find({ region, bestAttractions: true })
      .exec();
    return attractions;
  }

  async getAllAttractionsFromCategory(category: string) {
    const attractions = await this.attractionModel.find({ category }).exec();
    return attractions;
  }

  async getAllAttractions() {
    const attractions = await this.attractionModel.find().exec();
    return attractions;
  }

  async getAllFromCity(city: string) {
    const attractions = await this.attractionModel.find({ city }).exec();
    return attractions;
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
        bestAttractions: data.bestAttractions,
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
        bestAttractions: data.bestAttractions,
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
