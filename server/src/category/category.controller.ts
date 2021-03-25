import { Controller, Get } from '@nestjs/common';
import { CategoryInterface } from 'src/interfaces/category';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get('/')
    async getCategories(): Promise<CategoryInterface[]> {
        const categories = await this.categoryService.getCategories();
        return categories;
    }
}
