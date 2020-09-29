import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Dish } from "./dish.model";
import NormalizeString from "../utils/normalizeString";
import { isNull } from "util";

@Injectable()
export class DishesService {
  constructor(@InjectModel("Dish") private readonly dishModel: Model<Dish>) {}

  async getDishes() {
    const cultures = await this.dishModel.find().exec();
    return cultures;
  }

  async getSingleDish(key: string) {
    const culture = await this.findDish(key);
    return culture;
  }

  private async findDish(key: string): Promise<Dish> {
    let dish;
    try {
      dish = await this.dishModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find dish.");
    }
    if (!dish) {
      throw new NotFoundException("Could not find dish.");
    }
    return dish;
  }

  async createDish(data: Dish) {
    let res;
    const existDish = await this.dishModel
      .findOne({
        $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
      })
      .exec();

    if (isNull(existDish)) {
      const newDish = new this.dishModel({
        name: data.name,
        key: NormalizeString(data.name),
        category: data.category,
        img: data.img,
        shortDescription: data.shortDescription,
        description: data.description,
        otherData: data.otherData,
      });
      res = await newDish.save();
    } else {
      throw new HttpException("Dish is exist.", 409);
    }

    return res;
  }
}
