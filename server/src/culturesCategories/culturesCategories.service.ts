import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CultureCategory } from "./cultureCategory.model";

@Injectable()
export class CulturesCategoriesService {
  constructor(
    @InjectModel("CultureCategory")
    private readonly cultureCategoryModel: Model<CultureCategory>
  ) {}

  async getCategories() {
    const categories = await this.cultureCategoryModel.find().exec();
    return categories.map((category) => ({
      title: category.title,
      key: category.key,
    }));
  }
}
