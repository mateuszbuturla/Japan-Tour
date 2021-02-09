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
        img: "werwerwerwerew",
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

  async removeDish(key: string) {
    let res;

    try {
      const removedDish = await this.dishModel.remove({ key });
      if (removedDish.deletedCount > 0) {
        res = "Successfully deleted.";
      } else if (removedDish.deletedCount === 0) {
        throw new HttpException("Could not remove dish.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove dish.", 409);
    }

    return res;
  }

  async updateDish(key: string, data: Dish) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        category: data.category,
        img: "hokkaido.png",
        otherData: data.otherData,
      };

      const updatedDishes = await this.dishModel.updateOne({ key }, newData);
      if (updatedDishes.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
      } else if (updatedDishes.n === 0) {
        throw new HttpException("Could not update dish.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update dish.", 409);
    }

    return res;
  }
}
