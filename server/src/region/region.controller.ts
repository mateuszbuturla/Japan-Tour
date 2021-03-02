import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import * as delay from "delay";
import { UserObj } from "../decorators/user-obj.decorator";
import { User } from "../interface/user";
import { Region } from "./region.model";
import { RegionService } from "./region.service";
@Controller("/api/regions")
export class RegionController {
  constructor(private readonly RegionService: RegionService) {}

  @Get()
  async getAllRegions() {
    await delay(3000);

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
