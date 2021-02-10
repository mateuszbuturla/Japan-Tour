import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UseInterceptors,
} from "@nestjs/common";

import { AttractionsService } from "./attractions.service";
import { Attraction } from "./attraction.model";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("/api/attractions")
export class AttractionsController {
  constructor(private readonly attractionsService: AttractionsService) {}

  @Post("create")
  @UseInterceptors(FileInterceptor("file"))
  createAttraction(@Body() data: Attraction) {
    console.log(data.img[0]);
    return this.attractionsService.createAttraction(data);
  }

  @Delete("remove/:key")
  removeAttraction(@Param("key") key: string) {
    return this.attractionsService.removeAttraction(key);
  }

  @Patch("update/:key")
  updateAttraction(@Param("key") key: string, @Body() data: Attraction) {
    return this.attractionsService.updateAttraction(key, data);
  }

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

  @Get("")
  getAllAttractions() {
    return this.attractionsService.getAllAttractions();
  }
}
