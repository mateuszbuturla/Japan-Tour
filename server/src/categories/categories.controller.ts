import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from "@nestjs/common";

import { CategoriesService } from "./categories.service";
import { Category } from "./category.model";

@Controller("/api/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post("create")
  createCategory(@Body() data: Category) {
    return this.categoriesService.createCategory(data);
  }

  @Delete("remove/:key")
  removeCategory(@Param("key") data: string) {
    return this.categoriesService.removeCategory(data);
  }

  @Patch("update/:key")
  updateCategory(@Param("key") key: string, @Body() data: Category) {
    return this.categoriesService.updateCategory(key, data);
  }

  @Get(":section")
  async getAllCategories(@Param("section") section: string) {
    const categories = await this.categoriesService.getCategories(section);
    return categories;
  }
}
