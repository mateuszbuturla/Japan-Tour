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

import { DishesService } from "./dishes.service";
import { Dish } from "./dish.model";
import { AddUpdateDishSchema } from "./Schema/dish.schema";

@Controller("/api/dishes")
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.dishesService.getDishes();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  createDish(@Body() data: Dish) {
    return this.dishesService.createDish(data);
  }

  @Delete("remove/:id")
  removeDish(@Param("id") id: string) {
    return this.dishesService.removeDish(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  updateDish(@Param("key") key: string, @Body() data: Dish) {
    return this.dishesService.updateDish(key, data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.dishesService.getSingleDish(key);
  }
}
