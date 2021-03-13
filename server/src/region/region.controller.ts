import { Delete, Get, Patch, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { RegionInterface } from 'src/interfaces/region';
import { RegionService } from './region.service';
import { multerStorage } from 'src/utils/storage';
import * as path from 'path';
import { UploadedFiles } from '@nestjs/common';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import AddRegionDto from './dto/AddRegionDto';
import { UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/pipes/JoiValidationPipe';
import { AddRegionValidator } from './validation/AddRegionValidator';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get('/')
  async getRegions(): Promise<RegionInterface[]> {
    const regions = await this.regionService.getRegions();
    return regions;
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(AddRegionValidator))
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
    @Body() data: AddRegionDto,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const region = await this.regionService.createRegion(data, img);
    return region;
  }

  @Patch('/:id')
  // @UsePipes(new JoiValidationPipe(AddRegionValidator))
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
  async updateRegion(
    @Body() data: AddRegionDto,
    @Param('id') id: string,
    @UploadedFiles() img: MulterDiskUploadedFiles,
  ) {
    const region = await this.regionService.updateRegion(data, id, img);
    return region;
  }

  @Delete('/:id')
  async removeRegion(@Param('id') id: string): Promise<RegionInterface> {
    const region = await this.regionService.removeRegion(id);
    return region;
  }

  @Get('/:key')
  async getSingleRegions(@Param('key') key: string): Promise<RegionInterface> {
    const region = await this.regionService.getSingleRegions(key);
    return region;
  }
}
