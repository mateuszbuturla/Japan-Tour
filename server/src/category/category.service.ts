import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Category } from "./category.model";
import NormalizeString from "../utils/normalizeString";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel("Category")
    private readonly categoryModel: Model<Category>
  ) {}

  async getCategories(section: string) {
    const categories = await this.categoryModel.find({ section }).exec();
    return categories.map((category) => ({
      _id: category._id,
      name: category.name,
      key: category.key,
      img: category.img,
    }));
  }

  async getAllCategories() {
    const categories = await this.categoryModel.find().exec();
    return categories.map((category) => ({
      _id: category._id,
      name: category.name,
      key: category.key,
      section: category.section,
      img: category.img,
    }));
  }

  async createCategory(data: Category) {
    let res;
    const existCategory = await this.categoryModel
      .findOne({
        $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
      })
      .exec();

    if (isNull(existCategory)) {
      const newCategory = new this.categoryModel({
        name: data.name,
        key: NormalizeString(data.name),
        section: data.section,
        img: data.img,
      });
      res = await newCategory.save();
    } else {
      throw new HttpException("Category is exist.", 409);
    }

    return res;
  }

  async removeCategory(id: string) {
    let res;

    try {
      const removedCategory = await this.categoryModel.remove({ _id: id });
      if (removedCategory.deletedCount > 0) {
        res = {
          statusCode: 200,
          message: "Successfully deleted.",
        };
      } else if (removedCategory.deletedCount === 0) {
        throw new HttpException("Could not remove category.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove category.", 409);
    }

    return res;
  }

  async updateCategory(key: string, data: Category) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        section: data.section,
        img: data.img,
      };

      const updatedCategory = await this.categoryModel.updateOne(
        { key },
        newData
      );

      if (updatedCategory.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
      } else if (updatedCategory.n === 0) {
        throw new HttpException("Could not update category.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update category.", 409);
    }

    return res;
  }
}
