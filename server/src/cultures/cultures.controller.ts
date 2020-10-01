import { Controller, Body, Get, Param, Post } from "@nestjs/common";

import { CulturesService } from "./cultures.service";
import { Culture } from "./culture.model";

@Controller("/api/cultures")
export class CulturesController {
  constructor(private readonly culturesService: CulturesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.culturesService.getCultures();
    return regions;
  }

  @Post("create")
  createCity(@Body() data: Culture) {
    return this.culturesService.createCulture(data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.culturesService.getSingleCulture(key);
  }
}