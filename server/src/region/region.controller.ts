import { Controller, Body, Get, Param, Patch, Post } from "@nestjs/common";

import { RegionService } from "./region.service";
import { Region } from "./region.model";

@Controller("/api/regions")
export class RegionController {
  constructor(private readonly RegionService: RegionService) {}

  @Get()
  async getAllRegions() {
    const regions = await this.RegionService.getRegions();
    return regions;
  }

  @Post("create")
  createRegion(@Body() data: Region) {
    console.log(data);
    return this.RegionService.createRegion(data);
  }

  @Patch("update/:key")
  updateRegion(@Param("key") key: string, @Body() data: Region) {
    return this.RegionService.updateRegion(key, data);
  }

  @Get(":key")
  getSingleRegion(@Param("key") key: string) {
    return this.RegionService.getSingleRegion(key);
  }
}
