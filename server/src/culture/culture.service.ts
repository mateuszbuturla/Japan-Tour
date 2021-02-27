import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Culture } from "./culture.model";
import NormalizeString from "../utils/normalizeString";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";
import { User } from "src/interface/User";

@Injectable()
export class CultureService {
  constructor(
    @InjectModel("Culture") private readonly cultureModel: Model<Culture>,
    private readonly actionHistoryService: ActionHistoryService
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

  async createCulture(data: Culture, user: User) {
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
      this.actionHistoryService.addNewItem({
        section: "culture",
        name: data.name,
        url: `/admin/culture/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Culture is exist.", 409);
    }
    return res;
  }

  async removeCulture(id: string, user: User) {
    let res;

    try {
      const removedCulture = await this.cultureModel.remove({ _id: id });
      if (removedCulture.deletedCount > 0) {
        res = "Successfully deleted.";
        this.actionHistoryService.addNewItem({
          section: "culture",
          name: "none",
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedCulture.deletedCount === 0) {
        throw new HttpException("Could not remove culture.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove culture.", 409);
    }

    return res;
  }

  async updateCulture(key: string, data: Culture, user: User) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        category: data.category,
        img: data.img,
        otherData: data.otherData,
      };

      const updatedCultures = await this.cultureModel.updateOne(
        { key },
        newData
      );
      if (updatedCultures.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "culture",
          name: data.name,
          url: `/admin/cities/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedCultures.n === 0) {
        throw new HttpException("Could not update culture.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update culture.", 409);
    }

    return res;
  }
}
