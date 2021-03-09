import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/User";
import { isNull } from "util";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";
import { RegionService } from "../region/region.service";
import NormalizeString from "../utils/normalizeString";
import { City } from "./city.model";
import { AttractionService } from "../attraction/attraction.service";

@Injectable()
export class CityService {
  constructor(
    @InjectModel("City") private readonly cityModel: Model<City>,
    @Inject(forwardRef(() => ActionHistoryService))
    private readonly actionHistoryService: ActionHistoryService,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
    @Inject(forwardRef(() => AttractionService))
    private readonly attractionService: AttractionService
  ) {}

  async getCities() {
    const cities = await this.cityModel.find().exec();
    return cities;
  }

  async getHighlightedCities() {
    const cities = await this.cityModel.find({ highlighted: true }).exec();
    const regions = await this.regionService.getRegions();
    return {
      aboveItems: regions.map((region) => ({
        _id: region._id,
        name: region.name,
        key: region.key,
      })),
      items: cities.map((city) => ({
        _id: city._id,
        name: city.name,
        url: city.url,
        key: city.key,
        description: city.description,
        img: city.img,
        region: city.region,
        otherData: city.otherData,
        highlighted: city.highlighted,
      })),
    };
  }

  async getSingleCity(key: string, withAttractions: boolean) {
    const city = await this.findRegion(key);
    let attractions = null;

    let res = {
      city: city,
    };

    if (withAttractions) {
      attractions = await this.attractionService.getAllFromCity(key);
      res["attractions"] = attractions;
    }

    return res;
  }

  private async findRegion(key: string): Promise<City> {
    let city;
    try {
      city = await this.cityModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find city.");
    }
    if (!city) {
      throw new NotFoundException("Could not find city.");
    }
    return city;
  }

  async createCity(data: City, user: User) {
    let res;
    const existCity = await this.cityModel
      .findOne({
        $or: [
          { name: data.name },
          { url: NormalizeString(data.name) },
          { key: NormalizeString(data.name) },
        ],
      })
      .exec();

    if (isNull(existCity)) {
      const newCity = new this.cityModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        region: data.region,
        description: data.description,
        img: data.img,
        otherData: data.otherData,
        highlighted: data.highlighted,
        prefecture: data.prefecture,
      });
      res = await newCity.save();
      this.actionHistoryService.addNewItem({
        section: "cities",
        name: data.name,
        url: `/admin/cities/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("City is exist.", 409);
    }

    return res;
  }

  async removeCity(id: string, user: User) {
    let res;

    try {
      const removedCity = await this.cityModel.remove({ _id: id });
      if (removedCity.deletedCount > 0) {
        res = "Successfully deleted.";
        this.actionHistoryService.addNewItem({
          section: "cities",
          name: "none",
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedCity.deletedCount === 0) {
        throw new HttpException("Could not remove city.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove city.", 409);
    }

    return res;
  }

  async updateCity(key: string, data: City, user: User) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        url: NormalizeString(data.name),
        description: data.description,
        region: data.region,
        img: data.img,
        otherData: data.otherData,
        highlighted: data.highlighted,
        prefecture: data.prefecture,
      };

      const updatedCity = await this.cityModel.updateOne({ key }, newData);
      if (updatedCity.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "cities",
          name: data.name,
          url: `/admin/cities/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedCity.n === 0) {
        throw new HttpException("Could not update city.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update city.", 409);
    }

    return res;
  }

  async getHighlightedFromRegion(regionKey: string) {
    const region = await this.regionService.getSingleRegion(
      regionKey,
      false,
      false,
      false
    );
    const cities = await this.cityModel
      .find({ region: region.region._id, highlighted: true })
      .exec();
    return {
      items: cities,
    };
  }

  async getFromRegion(regionKey: string) {
    const region = await this.regionService.getSingleRegion(
      regionKey,
      false,
      false,
      false
    );
    const cities = await this.cityModel
      .find({ region: region.region._id })
      .exec();
    return cities;
  }
}
