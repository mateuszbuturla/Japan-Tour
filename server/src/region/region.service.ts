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
import { CityService } from "../city/city.service";
import { AttractionService } from "../attraction/attraction.service";
import NormalizeString from "../utils/normalizeString";
import { Region } from "./region.model";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel("Region") private readonly regionModel: Model<Region>,
    private readonly actionHistoryService: ActionHistoryService,
    @Inject(forwardRef(() => CityService))
    private readonly cityService: CityService,
    @Inject(forwardRef(() => AttractionService))
    private readonly attractionService: AttractionService
  ) {}

  async getRegions() {
    const regions = await this.regionModel.find().exec();
    return regions;
  }

  async getSingleRegion(
    key: string,
    withCities: boolean,
    withAttractions: boolean
  ) {
    const region = await this.findRegion(key);
    let cities = null;
    let attractions = null;
    if (withCities) {
      cities = await this.cityService.getFromRegion(key);
    }

    if (withAttractions) {
      attractions = await this.attractionService.getAllAttractionsFromRegion(
        key
      );
    }

    let res = {
      region,
    };

    if (withCities) {
      res["cities"] = cities;
    }

    if (withAttractions) {
      res["attractions"] = attractions;
    }

    return res;
  }

  async createRegion(data: Region, user: User) {
    let res;
    const existRegion = await this.regionModel
      .findOne({
        $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
      })
      .exec();

    if (isNull(existRegion)) {
      const newRegion = new this.regionModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        img: data.img,
        description: data.description,
        otherData: data.otherData,
      });
      res = await newRegion.save();
      this.actionHistoryService.addNewItem({
        section: "regions",
        name: data.name,
        url: `/admin/regions/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Region is exist.", 409);
    }

    return res;
  }

  private async findRegion(key: string): Promise<Region> {
    let region;
    try {
      region = await this.regionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find region.");
    }
    if (!region) {
      throw new NotFoundException("Could not find region.");
    }
    return region;
  }

  async updateRegion(key: string, data: Region, user: User) {
    let res;

    try {
      let newData = {
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        description: data.description,
        otherData: data.otherData,
        img: data.img,
      };

      const updatedRegions = await this.regionModel.updateOne({ key }, newData);
      if (updatedRegions.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "regions",
          name: data.name,
          url: `/admin/regions/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedRegions.n === 0) {
        throw new HttpException("Could not update region.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update region.", 409);
    }

    return res;
  }
}
