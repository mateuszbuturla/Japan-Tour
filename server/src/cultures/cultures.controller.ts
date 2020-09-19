import { Controller, Body, Get, Param } from "@nestjs/common";

import { CulturesService } from "./cultures.service";

@Controller("/api/cultures")
export class CulturesController {
  constructor(private readonly culturesService: CulturesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.culturesService.getCultures();
    return regions;
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.culturesService.getSingleCulture(key);
  }
}
