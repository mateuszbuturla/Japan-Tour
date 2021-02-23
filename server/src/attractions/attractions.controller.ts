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

import { AttractionsService } from "./attractions.service";
import { Attraction } from "./attraction.model";
import { AddUpdateAttractionSchema } from "./Schema/attraction.schema";

@Controller("/api/attractions")
export class AttractionsController {
  constructor(private readonly attractionsService: AttractionsService) {}

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
  createAttraction(@Body() data: Attraction) {
    return this.attractionsService.createAttraction(data);
  }

  @Delete("remove/:id")
  removeAttraction(@Param("id") id: string) {
    return this.attractionsService.removeAttraction(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
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
