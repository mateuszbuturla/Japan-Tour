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

import { CitiesService } from "./cities.service";
import { City } from "./city.model";
import { AddUpdateCitySchema } from "./Schema/city.schema";

@Controller("/api/cities")
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getAllCities() {
    const regions = await this.citiesService.getCities();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  createCity(@Body() data: City) {
    return this.citiesService.createCity(data);
  }

  @Delete("remove/:id")
  removeCity(@Param("id") id: string) {
    return this.citiesService.removeCity(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  updateCity(@Param("key") key: string, @Body() data: City) {
    return this.citiesService.updateCity(key, data);
  }

  @Get(":key")
  getSingleCity(@Param("key") key: string) {
    return this.citiesService.getSingleCity(key);
  }
}
