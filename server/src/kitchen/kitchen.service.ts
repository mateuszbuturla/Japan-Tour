import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/User";
import { isNull } from "util";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";
import { CategoryService } from "../category/category.service";
import NormalizeString from "../utils/normalizeString";
import { Kitchen } from "./kitchen.model";

@Injectable()
export class KitchenService {
  constructor(
    @InjectModel("Kitchen") private readonly kitchenModel: Model<Kitchen>,
    private readonly actionHistoryService: ActionHistoryService,
    private readonly categoryService: CategoryService
  ) {}

  async getKitchens() {
    const kitchens = await this.kitchenModel.find().exec();
    return kitchens;
  }

  async getSingleKitchen(key: string) {
    const kitchen = await this.findKitchen(key);
    return kitchen;
  }

  private async findKitchen(key: string): Promise<Kitchen> {
    let kitchen;
    try {
      kitchen = await this.kitchenModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find kitchen.");
    }
    if (!kitchen) {
      throw new NotFoundException("Could not find kitchen.");
    }
    return kitchen;
  }

  async createKitchen(data: Kitchen, user: User) {
    let res;
    const existKitchen = await this.kitchenModel
      .findOne({
        $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
      })
      .exec();

    if (isNull(existKitchen)) {
      const newKitchen = new this.kitchenModel({
        name: data.name,
        key: NormalizeString(data.name),
        category: data.category,
        img: data.img,
        shortDescription: data.shortDescription,
        description: data.description,
        otherData: data.otherData,
      });
      res = await newKitchen.save();
      this.actionHistoryService.addNewItem({
        section: "kitchen",
        name: data.name,
        url: `/admin/kitchen/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Kitchen is exist.", 409);
    }

    return res;
  }

  async removeKitchen(id: string, user: User) {
    let res;

    try {
      const removedKitchen = await this.kitchenModel.remove({ _id: id });
      if (removedKitchen.deletedCount > 0) {
        res = "Successfully deleted.";
        this.actionHistoryService.addNewItem({
          section: "kitchen",
          name: "none",
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedKitchen.deletedCount === 0) {
        throw new HttpException("Could not remove kitchen.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove kitchen.", 409);
    }

    return res;
  }

  async updateKitchen(key: string, data: Kitchen, user: User) {
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

      const updatedKitchens = await this.kitchenModel.updateOne(
        { key },
        newData
      );
      if (updatedKitchens.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
        this.actionHistoryService.addNewItem({
          section: "kitchen",
          name: data.name,
          url: `/admin/kitchen/update/${NormalizeString(data.name)}`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "update",
        });
      } else if (updatedKitchens.n === 0) {
        throw new HttpException("Could not update kitchen.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update kitchen.", 409);
    }

    return res;
  }
}
