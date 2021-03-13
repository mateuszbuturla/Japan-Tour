import { PrefectureInterface } from './../interfaces/prefecture';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prefecture } from './prefecture.entity';

@Injectable()
export class PrefectureService {
  constructor(
    @InjectModel('Prefecture')
    private readonly prefectureModel: Model<Prefecture>,
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
}
