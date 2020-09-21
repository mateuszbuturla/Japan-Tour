import { Controller, Body, Get, Param } from "@nestjs/common";

import { CategoriesService } from "./categories.service";

@Controller("/api/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(":section")
  async getAllCategories(@Param("section") section: string) {
    const categories = await this.categoriesService.getCategories(section);
    return categories;
  }
}
