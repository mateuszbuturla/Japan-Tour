import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/User";
import { isNull } from "util";
import { ActionHistoryService } from "../actionHistory/actionHistory.service";
import { CategoryService } from "../category/category.service";
import NormalizeString from "../utils/normalizeString";
import { Dish } from "./dish.model";

@Injectable()
export class DishService {
  constructor(
    @InjectModel("Dish") private readonly dishModel: Model<Dish>,
    private readonly actionHistoryService: ActionHistoryService,
    private readonly categoryService: CategoryService
  ) {}

  async getDishes() {
    const dishes = await this.dishModel.find().exec();
    const categories = await this.categoryService.getCategories("dishes");
    return {
      items: dishes,
      aboveItems: categories.map((item) => ({
        _id: item._id,
        name: item.name,
      })),
    };
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

  async createDish(data: Dish, user: User) {
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
      this.actionHistoryService.addNewItem({
        section: "kitchen",
        name: data.name,
        url: `/admin/kitchen/update/${NormalizeString(data.name)}`,
        date: new Date().toLocaleDateString(),
        author: user._id,
        action: "add",
      });
    } else {
      throw new HttpException("Dish is exist.", 409);
    }

    return res;
  }

  async removeDish(id: string, user: User) {
    let res;

    try {
      const removedDish = await this.dishModel.remove({ _id: id });
      if (removedDish.deletedCount > 0) {
        res = "Successfully deleted.";
        this.actionHistoryService.addNewItem({
          section: "kitchen",
          name: "none",
          url: `none`,
          date: new Date().toLocaleDateString(),
          author: user._id,
          action: "remove",
        });
      } else if (removedDish.deletedCount === 0) {
        throw new HttpException("Could not remove dish.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove dish.", 409);
    }

    return res;
  }

  async updateDish(key: string, data: Dish, user: User) {
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

      const updatedDishes = await this.dishModel.updateOne({ key }, newData);
      if (updatedDishes.n > 0) {
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
      } else if (updatedDishes.n === 0) {
        throw new HttpException("Could not update dish.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update dish.", 409);
    }

    return res;
  }
}
