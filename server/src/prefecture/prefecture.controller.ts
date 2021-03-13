import { Controller, Get } from '@nestjs/common';
import { RegionInterface } from 'src/interfaces/region';
import { PrefectureService } from './prefecture.service';

@Controller('prefecture')
export class PrefectureController {
  constructor(private readonly prefectureService: PrefectureService) {}

  @Get('/')
  async getPrefectures(): Promise<RegionInterface[]> {
    const prefectures = await this.prefectureService.getPrefectures();
    return prefectures;
  }
}
