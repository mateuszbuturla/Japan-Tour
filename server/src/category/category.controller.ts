import {
  Body,
  Controller,
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
import { Category } from "./category.model";
import { CategoryService } from "./category.service";

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
