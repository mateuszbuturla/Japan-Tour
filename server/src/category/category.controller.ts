import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CategoryInterface } from 'src/interfaces/category';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import { CategoryService } from './category.service';
import AddCategoryDto from './dto/AddCategoryDto';
import { AddCategoryValidator } from './validation/AddCategoryValidator';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getCategories(): Promise<CategoryInterface[]> {
    const categories = await this.categoryService.getCategories();
    return categories;
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(AddCategoryValidator))
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'img',
          maxCount: 1,
        },
      ],
      {
        storage: multerStorage(),
      },
    ),
  )
  async createCategory(
    @Body() data: AddCategoryDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const category = await this.categoryService.createCategory(data, img);
    return category;
  }

  @Patch('/:id')
  //   @UsePipes(new JoiValidationPipe(AddPrefectureValidator))
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'img',
          maxCount: 1,
        },
      ],
      {
        storage: multerStorage(),
      },
    ),
  )
  async updateCategory(
    @Body() data: AddCategoryDto,
    @Param('id') id: string,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const category = await this.categoryService.updateCategory(data, id, img);
    return category;
  }

  @Get('/:key')
  async getSingleCity(@Param('key') key: string): Promise<CategoryInterface> {
    const category = await this.categoryService.getSingleCategory(key);
    return category;
  }
}
