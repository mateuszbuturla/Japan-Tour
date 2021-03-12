import { Injectable } from '@nestjs/common';
import { RegionInterface } from '../interfaces/region';
import { Region } from './region.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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
}
