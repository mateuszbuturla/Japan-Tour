import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Culture } from "./culture.model";
import NormalizeString from "../utils/normalizeString";

@Injectable()
export class CulturesService {
  constructor(
    @InjectModel("Culture") private readonly cultureModel: Model<Culture>
  ) {}

  async getCultures() {
    const cultures = await this.cultureModel.find().exec();
    return cultures;
  }

  async getSingleCulture(key: string) {
    const culture = await this.findCulture(key);
    return culture;
  }

  private async findCulture(key: string): Promise<Culture> {
    let culture;
    try {
      culture = await this.cultureModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find culture.");
    }
    if (!culture) {
      throw new NotFoundException("Could not find culture.");
    }
    return culture;
  }

  async createCulture(data: Culture) {
    let res;
    const existCulture = await this.cultureModel
      .findOne({
        $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
      })
      .exec();

    if (isNull(existCulture)) {
      const newCulture = new this.cultureModel({
        name: data.name,
        key: NormalizeString(data.name),
        category: data.category,
        img: data.img,
        shortDescription: data.shortDescription,
        description: data.description,
        otherData: data.otherData,
      });
      res = await newCulture.save();
    } else {
      throw new HttpException("Culture is exist.", 409);
    }

    return res;
  }
}
