import {
  Body,
  Controller,
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
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { PrefectureInterface } from 'src/interfaces/prefecture';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { multerStorage } from 'src/utils/storage';
import AddPrefectureDto from './dto/AddPrefectureDto';
import GetPrefectureDto from './dto/GetPrefectureDto';
import { PrefectureService } from './prefecture.service';
import { AddPrefectureValidator } from './validation/AddPrefectureValidator';

@Controller('prefecture')
export class PrefectureController {
  constructor(private readonly prefectureService: PrefectureService) {}

  @Get('/')
  async getPrefectures(
    @Query() query: GetPrefectureDto,
  ): Promise<PrefectureInterface[]> {
    const prefectures = await this.prefectureService.getPrefectures(query);
    return prefectures;
  }

  @Post('/')
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
  async createPrefecture(
    @Body() data: AddPrefectureDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const prefecture = await this.prefectureService.createPrefecture(data, img);
    return prefecture;
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
  async updatePrefecture(
    @Body() data: AddPrefectureDto,
    @Param('id') id: string,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const prefecture = await this.prefectureService.updatePrefecture(
      data,
      id,
      img,
    );
    return prefecture;
  }

  @Delete('/:id')
  async removePrefecture(
    @Param('id') id: string,
  ): Promise<PrefectureInterface> {
    const prefecture = await this.prefectureService.removePrefecture(id);
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
