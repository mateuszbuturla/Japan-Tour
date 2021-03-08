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
import { AttractionService } from "./attraction.service";

@Controller("/api/attractions")
export class AttractionController {
  constructor(private readonly AttractionService: AttractionService) {}

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
  createAttraction(@Body() data: any, @UserObj() user: User) {
    return this.AttractionService.createAttraction(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeAttraction(@Param("id") id: string, @UserObj() user: User) {
    return this.AttractionService.removeAttraction(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateAttractionSchema))
  updateAttraction(
    @Param("key") key: string,
    @Body() data: any,
    @UserObj() user: User
  ) {
    return this.AttractionService.updateAttraction(key, data, user);
  }

  @Get("highlightedFromRegion/:region")
  async getHighlightedFromRegion(@Param("region") region: string) {
    const attractions = await this.AttractionService.getHighlightedFromRegion(
      region
    );
    return attractions;
  }

  @Get("highlightedFromCity/:city")
  async getHighlightedFromCity(@Param("city") city: string) {
    const attractions = await this.AttractionService.getHighlightedFromCity(
      city
    );
    return attractions;
  }

  @Get("highlightedFromCategoryByItemKey/:attraction")
  async getHighlightedFromCategoryByItemKey(
    @Param("attraction") attraction: string
  ) {
    const attractions = await this.AttractionService.getHighlightedFromCategoryByItemKey(
      attraction
    );
    return attractions;
  }

  @Get("/highlighted")
  getAllHighLightedAttractions() {
    return this.AttractionService.getAllHighlightedAttractions();
  }

  @Get("allFromCategory/:category")
  async getAllAttractionsFromCategory(@Param("category") category: string) {
    const attractions = await this.AttractionService.getAllAttractionsFromCategory(
      category
    );
    return attractions;
  }

  @Get("city/:city")
  async getAllAttractionsFromCity(@Param("city") city: string) {
    const attractions = await this.AttractionService.getAllFromCity(city);
    return attractions;
  }

  @Get(":key/:withSimilary?")
  getSingleAttraction(
    @Param("key") key: string,
    @Param("withSimilary", new DefaultValuePipe(false)) withSimilary: boolean
  ) {
    return this.AttractionService.getSingleAttraction(key, withSimilary);
  }

  @Get("/region/:region")
  getAllAttractionsFromRegion(@Param("region") region: string) {
    return this.AttractionService.getAllAttractionsFromRegion(region);
  }

  @Get("")
  getAllAttractions() {
    return this.AttractionService.getAllAttractions();
  }
}
