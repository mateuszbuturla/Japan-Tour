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

import { CityService } from "./city.service";
import { City } from "./city.model";
import { AddUpdateCitySchema } from "./Schema/city.schema";

@Controller("/api/cities")
export class CityController {
  constructor(private readonly CityService: CityService) {}

  @Get()
  async getAllCities() {
    const regions = await this.CityService.getCities();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  createCity(@Body() data: City) {
    return this.CityService.createCity(data);
  }

  @Delete("remove/:id")
  removeCity(@Param("id") id: string) {
    return this.CityService.removeCity(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  updateCity(@Param("key") key: string, @Body() data: City) {
    return this.CityService.updateCity(key, data);
  }

  @Get(":key")
  getSingleCity(@Param("key") key: string) {
    return this.CityService.getSingleCity(key);
  }
}
