import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UsePipes,
} from "@nestjs/common";
import { JoiValidationPipe } from "../pipes/JoiValidationPipe";

import { CategoriesService } from "./categories.service";
import { Category } from "./category.model";
import { AddUpdateCategorySchema } from "./Schema/categories.schema";

@Controller("/api/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.categoriesService.getAllCategories();
    return categories;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  createCategory(@Body() data: Category) {
    return this.categoriesService.createCategory(data);
  }

  @Delete("remove/:key")
  removeCategory(@Param("key") data: string) {
    return this.categoriesService.removeCategory(data);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  updateCategory(@Param("key") key: string, @Body() data: Category) {
    return this.categoriesService.updateCategory(key, data);
  }

  @Get(":section")
  async getAllCategoriesFromSection(@Param("section") section: string) {
    const categories = await this.categoriesService.getCategories(section);
    return categories;
  }
}
