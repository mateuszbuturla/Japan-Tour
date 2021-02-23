import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UsePipes,
} from "@nestjs/common";
import { JoiValidationPipe } from "../pipes/JoiValidationPipe";

import { CultureService } from "./culture.service";
import { Culture } from "./culture.model";
import { AddUpdateCultureSchema } from "./Schema/culture.schema";

@Controller("/api/cultures")
export class CultureController {
  constructor(private readonly CultureService: CultureService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.CultureService.getCultures();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  createCity(@Body() data: Culture) {
    return this.CultureService.createCulture(data);
  }

  @Delete("remove/:id")
  removeCulture(@Param("id") id: string) {
    return this.CultureService.removeCulture(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  updateCulture(@Param("key") key: string, @Body() data: Culture) {
    return this.CultureService.updateCulture(key, data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.CultureService.getSingleCulture(key);
  }
}
