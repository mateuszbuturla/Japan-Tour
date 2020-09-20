import { Controller, Body, Get, Param } from "@nestjs/common";

import { DishesService } from "./dishes.service";

@Controller("/api/dishes")
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.dishesService.getDishes();
    return regions;
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.dishesService.getSingleDish(key);
  }
}
