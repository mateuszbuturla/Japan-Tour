import { Controller, Body, Get, Param } from "@nestjs/common";

import { AttractionsService } from "./attractions.service";

@Controller("/api/attractions")
export class AttractionsController {
  constructor(private readonly attractionsService: AttractionsService) {}

  @Get("bestFromRegion/:region")
  async getBestAttractionsFromRegion(@Param("region") region: string) {
    const attractions = await this.attractionsService.getBestAttractionsFromRegion(
      region
    );
    return attractions;
  }

  @Get("allFromCategory/:category")
  async getAllAttractionsFromCategory(@Param("category") category: string) {
    const attractions = await this.attractionsService.getAllAttractionsFromCategory(
      category
    );
    return attractions;
  }

  @Get("allFromCity/:city")
  async getAllFromCity(@Param("city") city: string) {
    const attractions = await this.attractionsService.getAllFromCity(city);
    return attractions;
  }

  @Get(":key")
  getSingleAttraction(@Param("key") key: string) {
    return this.attractionsService.getSingleAttraction(key);
  }
}
