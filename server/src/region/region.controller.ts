import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "../decorators/user-obj.decorator";
import { User } from "../interface/user";
import { Region } from "./region.model";
import { RegionService } from "./region.service";
import { CityService } from "../city/city.service";

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

  @Get(":key/:withCities?/:withAttractions?")
  getSingleRegion(
    @Param("key") key: string,
    @Param("withCities", new DefaultValuePipe(false)) withCities: boolean,
    @Param("withAttractions", new DefaultValuePipe(false))
    withAttractions: boolean
  ) {
    return this.RegionService.getSingleRegion(key, withCities, withAttractions);
  }
}
