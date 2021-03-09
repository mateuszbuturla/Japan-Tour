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
import { Prefecture } from "./prefecture.model";
import { PrefectureService } from "./prefecture.service";

@Controller("/api/prefectures")
export class PrefectureController {
  constructor(private readonly PrefectureService: PrefectureService) {}

  @Get()
  async getAllPrefectures() {
    const regions = await this.PrefectureService.getPrefectures();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  createPrefecture(@Body() data: Prefecture, @UserObj() user: User) {
    return this.PrefectureService.createPrefecture(data, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCitySchema))
  updatePrefecture(
    @Param("key") key: string,
    @Body() data: Prefecture,
    @UserObj() user: User
  ) {
    return this.PrefectureService.updatePrefecture(key, data, user);
  }

  @Get(":key/:widthCities?/:withAttractions?")
  getSinglePrefecture(
    @Param("key") key: string,
    @Param("widthCities", new DefaultValuePipe(false)) widthCities: boolean,
    @Param("withAttractions", new DefaultValuePipe(false))
    withAttractions: boolean
  ) {
    return this.PrefectureService.getSinglePrefecture(
      key,
      widthCities,
      withAttractions
    );
  }

  @Get("region/:region")
  async getFromRegion(@Param("region") region: string) {
    const cities = await this.PrefectureService.getFromRegion(region);
    return cities;
  }
}
