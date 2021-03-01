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

import { CultureService } from "./culture.service";
import { Culture } from "./culture.model";
import { AddUpdateCultureSchema } from "./Schema/culture.schema";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";

@Controller("/api/cultures")
export class CultureController {
  constructor(private readonly CultureService: CultureService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.CultureService.getCultures();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  createCity(@Body() data: Culture, @UserObj() user: User) {
    return this.CultureService.createCulture(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeCulture(@Param("id") id: string, @UserObj() user: User) {
    return this.CultureService.removeCulture(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  updateCulture(
    @Param("key") key: string,
    @Body() data: Culture,
    @UserObj() user: User
  ) {
    return this.CultureService.updateCulture(key, data, user);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.CultureService.getSingleCulture(key);
  }
}
