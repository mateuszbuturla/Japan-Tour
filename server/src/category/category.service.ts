import { Injectable } from '@nestjs/common';
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
}
