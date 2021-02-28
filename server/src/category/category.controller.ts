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

import { CategoryService } from "./category.service";
import { Category } from "./category.model";
import { AddUpdateCategorySchema } from "./Schema/categories.schema";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";

@Controller("/api/categories")
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.CategoryService.getAllCategories();
    return categories;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  createCategory(@Body() data: Category, @UserObj() user: User) {
    return this.CategoryService.createCategory(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeCategory(@Param("id") data: string, @UserObj() user: User) {
    return this.CategoryService.removeCategory(data, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  updateCategory(
    @Param("key") key: string,
    @Body() data: Category,
    @UserObj() user: User
  ) {
    return this.CategoryService.updateCategory(key, data, user);
  }

  @Get(":section")
  async getAllCategoriesFromSection(@Param("section") section: string) {
    const categories = await this.CategoryService.getCategories(section);
    return categories;
  }
}
