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

import { DishService } from "./dish.service";
import { Dish } from "./dish.model";
import { AddUpdateDishSchema } from "./Schema/dish.schema";

@Controller("/api/dishes")
export class DishController {
  constructor(private readonly DishService: DishService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.DishService.getDishes();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  createDish(@Body() data: Dish) {
    return this.DishService.createDish(data);
  }

  @Delete("remove/:id")
  removeDish(@Param("id") id: string) {
    return this.DishService.removeDish(id);
  }

  @Patch("update/:key")
  // @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  updateDish(@Param("key") key: string, @Body() data: Dish) {
    return this.DishService.updateDish(key, data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.DishService.getSingleDish(key);
  }
}
