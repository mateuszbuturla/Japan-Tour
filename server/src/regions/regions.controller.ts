import { Controller, Body, Get, Param } from "@nestjs/common";

import { RegionsService } from "./regions.service";

@Controller("/api/regions")
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  async getAllRegions() {
    const regions = await this.regionsService.getRegions();
    return regions;
  }

  @Get(":key")
  getSingleRegion(@Param("key") key: string) {
    return this.regionsService.getSingleRegion(key);
  }
}
