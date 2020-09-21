import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Category } from "./category.model";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel("Category")
    private readonly cultureCategoryModel: Model<Category>
  ) {}

  async getCategories(section: string) {
    const categories = await this.cultureCategoryModel.find({ section }).exec();
    return categories.map((category) => ({
      title: category.title,
      key: category.key,
    }));
  }
}
