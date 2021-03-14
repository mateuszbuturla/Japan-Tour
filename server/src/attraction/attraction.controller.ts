import { Controller, Get, Param, Query } from '@nestjs/common';
import { AttractionInterface } from 'src/interfaces/attraction';
import { AttractionService } from './attraction.service';
import GetAttractionsDto from './dto/GetAttractionsDto';

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

  @Get('/:key')
  async getSingleAttraction(
    @Param('key') key: string,
  ): Promise<AttractionInterface> {
    const attraction = await this.attractionService.getSingleAttraction(key);
    return attraction;
  }
}
function QueryParams() {
  throw new Error('Function not implemented.');
}
