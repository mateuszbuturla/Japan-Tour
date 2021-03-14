import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CityInterface } from 'src/interfaces/city';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import { CityService } from './city.service';
import AddCityDto from './dto/AddCityDto';
import { AddCityValidator } from './validation/AddCityValidator';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/')
  async getCities(): Promise<CityInterface[]> {
    const cities = await this.cityService.getCities();
    return cities;
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(AddCityValidator))
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
  async createRegion(
    @Body() data: AddCityDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const city = await this.cityService.createCity(data, img);
    return city;
  }

  @Get('/:key')
  async getSingleCity(@Param('key') key: string): Promise<CityInterface> {
    const city = await this.cityService.getSingleCity(key);
    return city;
  }
}
