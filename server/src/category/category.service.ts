import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryInterface } from 'src/interfaces/category';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
  ) {}

  async getCategories(): Promise<CategoryInterface[]> {
    const categories = await this.categoryModel.find({});
    return categories;
  }

  async getSingleCategory(key: string): Promise<CategoryInterface> {
    const category = await this.findCategory(key);

    return category;
  }

  private async findCategory(key: string): Promise<CategoryInterface> {
    let category;
    try {
      category = await this.categoryModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find category.');
    }
    if (!category) {
      throw new NotFoundException('Could not find category.');
    }
    return category;
  }
}
