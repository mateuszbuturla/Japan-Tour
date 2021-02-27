import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UsePipes,
  UseGuards,
} from "@nestjs/common";
import { JoiValidationPipe } from "../pipes/JoiValidationPipe";

import { CityService } from "./city.service";
import { City } from "./city.model";
import { AddUpdateCitySchema } from "./Schema/city.schema";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";

@Controller("/api/cities")
export class CityController {
  constructor(private readonly CityService: CityService) {}

  @Get()
  async getAllCities() {
    const regions = await this.CityService.getCities();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  createCity(@Body() data: City, @UserObj() user: User) {
    return this.CityService.createCity(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeCity(@Param("id") id: string, @UserObj() user: User) {
    return this.CityService.removeCity(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  updateCity(
    @Param("key") key: string,
    @Body() data: City,
    @UserObj() user: User
  ) {
    return this.CityService.updateCity(key, data, user);
  }

  @Get(":key")
  getSingleCity(@Param("key") key: string) {
    return this.CityService.getSingleCity(key);
  }
}
