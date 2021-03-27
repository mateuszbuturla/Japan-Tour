import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  Patch,
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
  async updateAttraction(
    @Body() data: AddAttractionDto,
    @Param('id') id: string,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const attraction = await this.attractionService.updateAttraction(
      data,
      id,
      img,
    );
    return attraction;
  }

  @Delete('/:id')
  async removeAttraction(
    @Param('id') id: string,
  ): Promise<AttractionInterface> {
    const attraction = await this.attractionService.removeAttraction(id);
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
