import { Controller, Get, Param } from '@nestjs/common';
import { CityInterface } from 'src/interfaces/city';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/')
  async getCities(): Promise<CityInterface[]> {
    const cities = await this.cityService.getCities();
    return cities;
  }

  @Get('/:key')
  async getSingleCity(@Param('key') key: string): Promise<CityInterface> {
    const city = await this.cityService.getSingleCity(key);
    return city;
  }
}
