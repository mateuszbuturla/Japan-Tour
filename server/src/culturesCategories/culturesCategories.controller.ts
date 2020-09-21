import { Controller, Body, Get, Param } from "@nestjs/common";

import { CulturesCategoriesService } from "./culturesCategories.service";

@Controller("/api/categories/cultures")
export class CulturesCategoriesController {
  constructor(
    private readonly culturesCategoriesService: CulturesCategoriesService
  ) {}

  @Get()
  async getAllCategories() {
    const categories = await this.culturesCategoriesService.getCategories();
    return categories;
  }
}
