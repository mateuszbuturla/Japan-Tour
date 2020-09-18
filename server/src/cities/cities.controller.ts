import { Controller, Body, Get, Param } from "@nestjs/common";

import { CitiesService } from "./cities.service";

@Controller("/api/cities")
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getAllCities() {
    const regions = await this.citiesService.getCities();
    return regions;
  }

  @Get(":key")
  getSingleCity(@Param("key") key: string) {
    return this.citiesService.getSingleCity(key);
  }
}
