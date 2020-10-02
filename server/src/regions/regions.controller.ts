import { Controller, Body, Get, Param, Patch } from "@nestjs/common";

import { RegionsService } from "./regions.service";
import { Region } from "./region.model";

@Controller("/api/regions")
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  async getAllRegions() {
    const regions = await this.regionsService.getRegions();
    return regions;
  }

  @Patch("update/:key")
  updateRegion(@Param("key") key: string, @Body() data: Region) {
    return this.regionsService.updateRegion(key, data);
  }

  @Get(":key")
  getSingleRegion(@Param("key") key: string) {
    return this.regionsService.getSingleRegion(key);
  }
}
