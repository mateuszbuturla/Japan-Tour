import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";
import { Dish } from "./dish.model";
import { DishService } from "./dish.service";

@Controller("/api/dishes")
export class DishController {
  constructor(private readonly DishService: DishService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.DishService.getDishes();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  createDish(@Body() data: Dish, @UserObj() user: User) {
    return this.DishService.createDish(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeDish(@Param("id") id: string, @UserObj() user: User) {
    return this.DishService.removeDish(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateDishSchema))
  updateDish(
    @Param("key") key: string,
    @Body() data: Dish,
    @UserObj() user: User
  ) {
    return this.DishService.updateDish(key, data, user);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.DishService.getSingleDish(key);
  }
}
