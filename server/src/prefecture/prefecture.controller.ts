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
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { PrefectureInterface } from 'src/interfaces/prefecture';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import AddPrefectureDto from './dto/AddPrefectureDto';
import { PrefectureService } from './prefecture.service';
import { AddPrefectureValidator } from './validation/AddPrefectureValidator';

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

  @Post('/create')
  @UsePipes(new JoiValidationPipe(AddPrefectureValidator))
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
    @Body() data: AddPrefectureDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const prefecture = await this.prefectureService.createPrefecture(data, img);
    return prefecture;
  }

  @Get('/:key')
  async getSinglePrefecture(
    @Param('key') key: string,
  ): Promise<PrefectureInterface> {
    const prefecture = await this.prefectureService.getSinglePrefecture(key);
    return prefecture;
  }
}
