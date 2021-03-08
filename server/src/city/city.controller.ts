import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";
import { City } from "./city.model";
import { CityService } from "./city.service";

@Controller("/api/cities")
export class CityController {
  constructor(private readonly CityService: CityService) {}

  @Get()
  async getAllCities() {
    const regions = await this.CityService.getCities();
    return regions;
  }

  @Get("/highlighted")
  async getAllHighlightedCities() {
    const regions = await this.CityService.getHighlightedCities();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  createCity(@Body() data: City, @UserObj() user: User) {
    return this.CityService.createCity(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeCity(@Param("id") id: string, @UserObj() user: User) {
    return this.CityService.removeCity(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  updateCity(
    @Param("key") key: string,
    @Body() data: City,
    @UserObj() user: User
  ) {
    return this.CityService.updateCity(key, data, user);
  }

  @Get(":key/:withAttractions?")
  getSingleCity(
    @Param("key") key: string,
    @Param("withAttractions", new DefaultValuePipe(false))
    withAttractions: boolean
  ) {
    return this.CityService.getSingleCity(key, withAttractions);
  }

  @Get("region/:region")
  async getFromRegion(@Param("region") region: string) {
    const cities = await this.CityService.getFromRegion(region);
    return cities;
  }

  @Get("highlighted/:region")
  async getHighlightedFromRegion(@Param("region") region: string) {
    const cities = await this.CityService.getHighlightedFromRegion(region);
    return cities;
  }
}
