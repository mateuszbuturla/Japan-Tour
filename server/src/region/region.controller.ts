import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RegionInterface } from 'src/interfaces/region';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get('/')
  async getRegions(): Promise<RegionInterface[]> {
    const regions = await this.regionService.getRegions();
    return regions;
  }

  @Get('/:key')
  async getSingleRegions(@Param('key') key: string): Promise<RegionInterface> {
    const region = await this.regionService.getSingleRegions(key);
    return region;
  }
}
