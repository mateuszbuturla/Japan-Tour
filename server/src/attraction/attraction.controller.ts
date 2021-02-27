import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UsePipes,
  UseGuards,
} from "@nestjs/common";

import { JoiValidationPipe } from "../pipes/JoiValidationPipe";

import { AttractionService } from "./attraction.service";
import { Attraction } from "./attraction.model";
import { AddUpdateAttractionSchema } from "./Schema/attraction.schema";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";

@Controller("/api/attractions")
export class AttractionController {
  constructor(private readonly AttractionService: AttractionService) {}

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
  createAttraction(@Body() data: Attraction, @UserObj() user: User) {
    return this.AttractionService.createAttraction(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeAttraction(@Param("id") id: string, @UserObj() user: User) {
    return this.AttractionService.removeAttraction(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
  updateAttraction(
    @Param("key") key: string,
    @Body() data: Attraction,
    @UserObj() user: User
  ) {
    return this.AttractionService.updateAttraction(key, data, user);
  }

  @Get("bestFromRegion/:region")
  async getBestAttractionsFromRegion(@Param("region") region: string) {
    const attractions = await this.AttractionService.getBestAttractionsFromRegion(
      region
    );
    return attractions;
  }

  @Get("allFromCategory/:category")
  async getAllAttractionsFromCategory(@Param("category") category: string) {
    const attractions = await this.AttractionService.getAllAttractionsFromCategory(
      category
    );
    return attractions;
  }

  @Get("allFromCity/:city")
  async getAllFromCity(@Param("city") city: string) {
    const attractions = await this.AttractionService.getAllFromCity(city);
    return attractions;
  }

  @Get(":key")
  getSingleAttraction(@Param("key") key: string) {
    return this.AttractionService.getSingleAttraction(key);
  }

  @Get("")
  getAllAttractions() {
    return this.AttractionService.getAllAttractions();
  }
}
