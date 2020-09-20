import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Dish } from "./dish.model";

@Injectable()
export class DishesService {
  constructor(
    @InjectModel("Dish") private readonly cultureModel: Model<Dish>
  ) {}

  async getDishes() {
    const cultures = await this.cultureModel.find().exec();
    return cultures;
  }

  async getSingleDish(key: string) {
    const culture = await this.findDish(key);
    return culture;
  }

  private async findDish(key: string): Promise<Dish> {
    let dish;
    try {
      dish = await this.cultureModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find dish.");
    }
    if (!dish) {
      throw new NotFoundException("Could not find dish.");
    }
    return dish;
  }
}
