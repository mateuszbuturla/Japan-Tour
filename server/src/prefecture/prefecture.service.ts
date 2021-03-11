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
import { Prefecture } from "./prefecture.model";
import { AttractionService } from "../attraction/attraction.service";
import { CityService } from "../city/city.service";

@Injectable()
export class PrefectureService {
  constructor(
    @InjectModel("Prefecture")
    private readonly prefectureModel: Model<Prefecture>,
    @Inject(forwardRef(() => ActionHistoryService))
    private readonly actionHistoryService: ActionHistoryService,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
    @Inject(forwardRef(() => AttractionService))
    private readonly attractionService: AttractionService,
    @Inject(forwardRef(() => CityService))
    private readonly citiesService: CityService
  ) {}

  async getPrefectures() {
    const prefectures = await this.prefectureModel.find().exec();
    return prefectures;
  }

  async getSinglePrefecture(
    key: string,
    withCities: boolean,
    withAttractions: boolean
  ) {
    const prefecture = await this.findPrefecture(key);

    let res = {
      prefecture: prefecture,
    };

    if (withCities) {
      const cities = await this.citiesService.getFromPrefecture(key);
      res["cities"] = cities;
    }

    if (withAttractions) {
      const attractions = await this.attractionService.getFromPrefecture(key);
      res["attractions"] = attractions;
    }

    return res;
  }

  private async findPrefecture(key: string): Promise<Prefecture> {
    let prefecture;
    try {
      prefecture = await this.prefectureModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find prefecture.");
    }
    if (!prefecture) {
      throw new NotFoundException("Could not find prefecture.");
    }
    return prefecture;
  }

  async createPrefecture(data: Prefecture, user: User) {
    let res;
    const existPrefecture = await this.prefectureModel
      .findOne({
        $or: [
          { name: data.name },
          { url: NormalizeString(data.name) },
          { key: NormalizeString(data.name) },
        ],
      })
      .exec();

    if (isNull(existPrefecture)) {
      const newPrefecture = new this.prefectureModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        region: data.region,
        description: data.description,
        img: data.img,
        otherData: data.otherData,
        highlighted: data.highlighted,
        shortDescription: data.shortDescription,
      });
      res = await newPrefecture.save();
      this.actionHistoryService.addNewItem({
        section: "prefectures",
        name: data.name,
        url: `/admin/prefectures/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Prefecture is exist.", 409);
    }

    return res;
  }

  async removePrefecture(id: string, user: User) {
    let res;

    try {
      const removedPrefecture = await this.prefectureModel.remove({ _id: id });
      if (removedPrefecture.deletedCount > 0) {
        res = "Successfully deleted.";
        this.actionHistoryService.addNewItem({
          section: "prefectures",
          name: "none",
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedPrefecture.deletedCount === 0) {
        throw new HttpException("Could not remove prefecture.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove prefecture.", 409);
    }

    return res;
  }

  async updatePrefecture(key: string, data: Prefecture, user: User) {
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
        shortDescription: data.shortDescription,
      };

      const updatedPrefecture = await this.prefectureModel.updateOne(
        { key },
        newData
      );
      if (updatedPrefecture.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "prefectures",
          name: data.name,
          url: `/admin/prefectures/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedPrefecture.n === 0) {
        throw new HttpException("Could not update prefecture.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update prefecture.", 409);
    }

    return res;
  }

  async getFromRegion(regionKey: string) {
    const region = await this.regionService.getSingleRegion(
      regionKey,
      false,
      false,
      false
    );
    const prefectures = await this.prefectureModel
      .find({ region: region.region._id })
      .exec();
    return prefectures;
  }
}
