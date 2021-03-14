import { Controller, Get } from '@nestjs/common';
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
}
