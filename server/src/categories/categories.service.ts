import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Category } from "./category.model";
import NormalizeString from "../utils/normalizeString";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel("Category")
    private readonly categoryModel: Model<Category>
  ) {}

  async getCategories(section: string) {
    const categories = await this.categoryModel.find({ section }).exec();
    return categories.map((category) => ({
      title: category.title,
      key: category.key,
    }));
  }

  async createCategory(data: Category) {
    let res;
    const existDish = await this.categoryModel
      .findOne({
        $or: [{ title: data.title }, { key: NormalizeString(data.title) }],
      })
      .exec();

    if (isNull(existDish)) {
      const newDish = new this.categoryModel({
        title: data.title,
        key: NormalizeString(data.title),
        section: data.section,
      });
      res = await newDish.save();
    } else {
      throw new HttpException("Category is exist.", 409);
    }

    return res;
  }

  async removeCategory(key: string) {
    let res;

    try {
      const removedCategory = await this.categoryModel.remove({ key });
      if (removedCategory.deletedCount > 0) {
        res = "Successfully deleted.";
      } else if (removedCategory.deletedCount === 0) {
        throw new HttpException("Could not remove category.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove category.", 409);
    }

    return res;
  }
}
