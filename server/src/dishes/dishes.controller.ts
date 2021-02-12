import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from "@nestjs/common";

import { DishesService } from "./dishes.service";
import { Dish } from "./dish.model";

@Controller("/api/dishes")
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.dishesService.getDishes();
    return regions;
  }

  @Post("create")
  createDish(@Body() data: Dish) {
    return this.dishesService.createDish(data);
  }

  @Delete("remove/:id")
  removeDish(@Param("id") id: string) {
    return this.dishesService.removeDish(id);
  }

  @Patch("update/:key")
  updateDish(@Param("key") key: string, @Body() data: Dish) {
    return this.dishesService.updateDish(key, data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.dishesService.getSingleDish(key);
  }
}
