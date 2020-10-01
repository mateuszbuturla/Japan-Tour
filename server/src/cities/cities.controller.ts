import { Controller, Body, Get, Param, Post, Delete } from "@nestjs/common";

import { CitiesService } from "./cities.service";
import { City } from "./city.model";

@Controller("/api/cities")
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getAllCities() {
    const regions = await this.citiesService.getCities();
    return regions;
  }

  @Post("create")
  createCity(@Body() data: City) {
    return this.citiesService.createCity(data);
  }

  @Delete("remove/:key")
  removeCity(@Param("key") data: string) {
    return this.citiesService.removeCity(data);
  }

  @Get(":key")
  getSingleCity(@Param("key") key: string) {
    return this.citiesService.getSingleCity(key);
  }
}
