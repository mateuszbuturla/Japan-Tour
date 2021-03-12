import { Injectable } from '@nestjs/common';
import { RegionInterface } from 'src/interfaces/region';
import { Region } from './region.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { isNull } from 'util';
import { HttpException } from '@nestjs/common';
import NormalizeString from 'src/utils/normalizeString';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import * as fs from 'fs';
import * as path from 'path';
import { storageDir } from 'src/utils/storage';
import AddRegionDto from './dto/AddRegionDto';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel('Region') private readonly regionModel: Model<Region>,
  ) {}

  async getRegions(): Promise<RegionInterface[]> {
    const regions = await this.regionModel.find();
    return regions.map((region) => ({
      id: region._id,
      name: region.name,
      key: region.key,
      shortDescription: region.shortDescription,
      description: region.description,
      img: region.img,
    }));
  }

  async getSingleRegions(key: string): Promise<RegionInterface> {
    const region = await this.regionModel.findOne({ key });

    if (!region) {
      throw new NotFoundException();
    }

    return {
      id: region._id,
      name: region.name,
      key: region.key,
      shortDescription: region.shortDescription,
      description: region.description,
      img: region.img,
    };
  }

  async createRegion(data: AddRegionDto, imgs: MulterDiskUploadedFiles) {
    const img = imgs?.img?.[0] ?? null;

    if (!img) {
      throw new HttpException('Validation failed', 400);
    }

    try {
      const existRegion = await this.regionModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();
      if (existRegion.length > 0) {
        throw new HttpException('Region is exist.', 409);
      } else {
        const newRegion = new this.regionModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
          shortDescription: data.shortDescription,
        });
        const res = await newRegion.save();
        return res;
      }
    } catch (e: any) {
      try {
        if (img) {
          fs.unlinkSync(path.join(storageDir(), img.filename));
        }
      } catch (e2) {}

      throw e;
    }
  }
}
