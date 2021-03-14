import { Controller, Get, Param } from '@nestjs/common';
import { AttractionInterface } from 'src/interfaces/attraction';
import { AttractionService } from './attraction.service';

@Controller('attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @Get('/')
  async getCities(): Promise<AttractionInterface[]> {
    const attractions = await this.attractionService.getAttractions();
    return attractions;
  }

  @Get('/region/:key')
  async getAttractionsFromRegion(
    @Param('key') key: string,
  ): Promise<AttractionInterface[]> {
    const attractions = await this.attractionService.getAttractionsFromRegion(
      key,
    );
    return attractions;
  }

  @Get('/prefecture/:key')
  async getAttractionsFromPrefecture(
    @Param('key') key: string,
  ): Promise<AttractionInterface[]> {
    const attractions = await this.attractionService.getAttractionsFromPrefecture(
      key,
    );
    return attractions;
  }

  @Get('/city/:key')
  async getAttractionsFromCity(
    @Param('key') key: string,
  ): Promise<AttractionInterface[]> {
    const attractions = await this.attractionService.getAttractionsFromCity(
      key,
    );
    return attractions;
  }

  @Get('/:key')
  async getSingleAttraction(
    @Param('key') key: string,
  ): Promise<AttractionInterface> {
    const attraction = await this.attractionService.getSingleAttraction(key);
    return attraction;
  }
}
