import { PrefectureInterface } from './../interfaces/prefecture';
import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prefecture } from './prefecture.entity';
import { RegionService } from 'src/region/region.service';

@Injectable()
export class PrefectureService {
  constructor(
    @InjectModel('Prefecture')
    private readonly prefectureModel: Model<Prefecture>,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
  ) {}

  async getPrefectures(): Promise<PrefectureInterface[]> {
    const prefectures = await this.prefectureModel.find();
    return prefectures.map((prefecture) => ({
      id: prefecture._id,
      name: prefecture.name,
      key: prefecture.key,
      shortDescription: prefecture.shortDescription,
      description: prefecture.description,
      img: prefecture.img,
      region: prefecture.region,
      highlight: prefecture.highlight,
    }));
  }

  async getSinglePrefecture(key: string): Promise<PrefectureInterface> {
    const prefecture = await this.prefectureModel.findOne({ key });

    if (!prefecture) {
      throw new NotFoundException();
    }

    return {
      id: prefecture._id,
      name: prefecture.name,
      key: prefecture.key,
      shortDescription: prefecture.shortDescription,
      description: prefecture.description,
      img: prefecture.img,
      region: prefecture.region,
      highlight: prefecture.highlight,
    };
  }

  async getPrefecturesFromRegion(key: string): Promise<PrefectureInterface[]> {
    const region = await this.regionService.getSingleRegions(key);

    const prefectures = await this.prefectureModel.find({ region: region.id });
    return prefectures.map((prefecture) => ({
      id: prefecture._id,
      name: prefecture.name,
      key: prefecture.key,
      shortDescription: prefecture.shortDescription,
      description: prefecture.description,
      img: prefecture.img,
      region: prefecture.region,
      highlight: prefecture.highlight,
    }));
  }
}
