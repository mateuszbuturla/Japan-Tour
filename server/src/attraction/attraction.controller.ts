import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AttractionInterface } from 'src/interfaces/attraction';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import { AttractionService } from './attraction.service';
import AddAttractionDto from './dto/AddAttractionDto';
import GetAttractionsDto from './dto/GetAttractionsDto';
import { AddAttractionValidator } from './validation/AddAttractionValidator';

@Controller('attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @Get('/')
  async getAttractions(
    @Query() query: GetAttractionsDto,
  ): Promise<AttractionInterface[]> {
    const attractions = await this.attractionService.getAttractions(query);
    return attractions;
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(AddAttractionValidator))
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
  async createAttraction(
    @Body() data: AddAttractionDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const attraction = await this.attractionService.createAttraction(data, img);
    return attraction;
  }

  @Get('/:key')
  async getSingleAttraction(
    @Param('key') key: string,
  ): Promise<AttractionInterface> {
    const attraction = await this.attractionService.getSingleAttraction(key);
    return attraction;
  }
}
