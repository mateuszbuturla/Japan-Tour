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
import { CityInterface } from 'src/interfaces/city';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import { CityService } from './city.service';
import AddCityDto from './dto/AddCityDto';
import GetCitiesDto from './dto/GetCitiesDto';
import { AddCityValidator } from './validation/AddCityValidator';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/')
  async getCities(@Query() query: GetCitiesDto): Promise<CityInterface[]> {
    const cities = await this.cityService.getCities(query);
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
  async updateCity(
    @Body() data: AddCityDto,
    @Param('id') id: string,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const city = await this.cityService.updateCity(data, id, img);
    return city;
  }

  @Delete('/:id')
  async removePrefecture(@Param('id') id: string): Promise<CityInterface> {
    const city = await this.cityService.removeCity(id);
    return city;
  }

  @Get('/:key')
  async getSingleCity(@Param('key') key: string): Promise<CityInterface> {
    const city = await this.cityService.getSingleCity(key);
    return city;
  }
}
