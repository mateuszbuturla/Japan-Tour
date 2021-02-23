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

import { CulturesService } from "./cultures.service";
import { Culture } from "./culture.model";
import { AddUpdateCultureSchema } from "./Schema/culture.schema";

@Controller("/api/cultures")
export class CulturesController {
  constructor(private readonly culturesService: CulturesService) {}

  @Get()
  async getAllCulures() {
    const regions = await this.culturesService.getCultures();
    return regions;
  }

  @Post("create")
  @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  createCity(@Body() data: Culture) {
    return this.culturesService.createCulture(data);
  }

  @Delete("remove/:id")
  removeCulture(@Param("id") id: string) {
    return this.culturesService.removeCulture(id);
  }

  @Patch("update/:key")
  @UsePipes(new JoiValidationPipe(AddUpdateCultureSchema))
  updateCulture(@Param("key") key: string, @Body() data: Culture) {
    return this.culturesService.updateCulture(key, data);
  }

  @Get(":key")
  getSingleCulture(@Param("key") key: string) {
    return this.culturesService.getSingleCulture(key);
  }
}
