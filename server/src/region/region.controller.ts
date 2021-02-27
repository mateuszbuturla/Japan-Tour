import {
  Controller,
  Body,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";

import { RegionService } from "./region.service";
import { Region } from "./region.model";
import { User } from "../interface/user";
import { UserObj } from "../decorators/user-obj.decorator";
import { AuthGuard } from "@nestjs/passport";

@Controller("/api/regions")
export class RegionController {
  constructor(private readonly RegionService: RegionService) {}

  @Get()
  async getAllRegions() {
    const regions = await this.RegionService.getRegions();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  createRegion(@Body() data: Region, @UserObj() user: User) {
    return this.RegionService.createRegion(data, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  updateRegion(
    @Param("key") key: string,
    @Body() data: Region,
    @UserObj() user: User
  ) {
    return this.RegionService.updateRegion(key, data, user);
  }

  @Get(":key")
  getSingleRegion(@Param("key") key: string) {
    return this.RegionService.getSingleRegion(key);
  }
}
