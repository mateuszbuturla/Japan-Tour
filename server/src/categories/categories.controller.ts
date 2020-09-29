import { Controller, Body, Get, Param, Post } from "@nestjs/common";

import { CategoriesService } from "./categories.service";
import { Category } from "./category.model";

@Controller("/api/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post("create")
  createCategory(@Body() data: Category) {
    return this.categoriesService.createCategory(data);
  }

  @Get(":section")
  async getAllCategories(@Param("section") section: string) {
    const categories = await this.categoriesService.getCategories(section);
    return categories;
  }
}
