import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryInterface } from 'src/interfaces/category';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import NormalizeString from 'src/utils/normalizeString';
import { storageDir } from 'src/utils/storage';
import { Category } from './category.entity';
import AddCategoryDto from './dto/AddCategoryDto';
import * as fs from 'fs';
import * as path from 'path';

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

  async createCategory(data: AddCategoryDto, imgs: MulterDiskUploadedFiles) {
    const img = imgs?.img?.[0] ?? null;

    if (!img) {
      throw new HttpException('Validation failed', 400);
    }

    try {
      const existCategory = await this.categoryModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();

      if (existCategory.length > 0) {
        throw new HttpException('Category is exist.', 409);
      } else {
        const newCategory = new this.categoryModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
        });
        const res = await newCategory.save();
        return res;
      }
    } catch (e: any) {
      try {
        if (img) {
          fs.unlinkSync(path.join(storageDir(), img.filename));
        }
      } catch (e2) {}

      throw e;
    }
  }

  async updateCategory(
    data: AddCategoryDto,
    id: string,
    imgs: MulterDiskUploadedFiles,
  ) {
    const img = imgs?.img?.[0] ?? null;
    if (!img) {
      throw new HttpException('Validation failed', 400);
    }
    try {
      let categoryToUpdate = null;
      try {
        categoryToUpdate = await this.categoryModel.findOne({ _id: id });
      } catch (e) {
        throw new HttpException('Cateory is not exist', 404);
      }
      const existCategory = await this.categoryModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();
      if (existCategory.length > 0 && data.name !== categoryToUpdate.name) {
        throw new HttpException('Category is already exist.', 409);
      } else {
        let newData = {
          name: data.name,
          key: NormalizeString(data.name),
          description: data.description,
          img: img.filename,
        };

        const updatedCategory = await this.categoryModel.updateOne(
          { key: categoryToUpdate.key },
          newData,
        );
        if (updatedCategory.n > 0) {
          try {
            if (categoryToUpdate.img) {
              fs.unlinkSync(path.join(storageDir(), categoryToUpdate.img));
            }
          } catch (e2) {}
          return { status: 200, message: 'Succesfully updated' };
        } else if (updatedCategory.n === 0) {
          throw new HttpException('Could not update category.', 409);
        }
      }
    } catch (e: any) {
      try {
        if (img) {
          fs.unlinkSync(path.join(storageDir(), img.filename));
        }
      } catch (e2) {}

      throw e;
    }
  }

}
