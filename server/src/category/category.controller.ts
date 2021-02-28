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

import { CategoryService } from "./category.service";
import { Category } from "./category.model";
import { AddUpdateCategorySchema } from "./Schema/categories.schema";

@Controller("/api/categories")
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.CategoryService.getAllCategories();
    return categories;
  }

  @Post("create")
  // @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  createCategory(@Body() data: Category) {
    console.log(data);
    return this.CategoryService.createCategory(data);
  }

  @Delete("remove/:id")
  removeCategory(@Param("id") data: string) {
    return this.CategoryService.removeCategory(data);
  }

  @Patch("update/:key")
  // @UsePipes(new JoiValidationPipe(AddUpdateCategorySchema))
  updateCategory(@Param("key") key: string, @Body() data: Category) {
    return this.CategoryService.updateCategory(key, data);
  }

  @Get(":section")
  async getAllCategoriesFromSection(@Param("section") section: string) {
    const categories = await this.CategoryService.getCategories(section);
    return categories;
  }
}
