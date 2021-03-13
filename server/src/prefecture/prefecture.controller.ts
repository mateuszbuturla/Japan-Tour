import { Controller, Get, Param } from '@nestjs/common';
import { PrefectureInterface } from 'src/interfaces/prefecture';
import { PrefectureService } from './prefecture.service';

@Controller('prefecture')
export class PrefectureController {
  constructor(private readonly prefectureService: PrefectureService) {}

  @Get('/')
  async getPrefectures(): Promise<PrefectureInterface[]> {
    const prefectures = await this.prefectureService.getPrefectures();
    return prefectures;
  }

  @Get('/region/:key')
  async getPrefecturesFromRegion(
    @Param('key') key: string,
  ): Promise<PrefectureInterface[]> {
    const prefectures = await this.prefectureService.getPrefecturesFromRegion(
      key,
    );
    return prefectures;
  }

  @Get('/:key')
  async getSinglePrefecture(
    @Param('key') key: string,
  ): Promise<PrefectureInterface> {
    const prefecture = await this.prefectureService.getSinglePrefecture(key);
    return prefecture;
  }
}
