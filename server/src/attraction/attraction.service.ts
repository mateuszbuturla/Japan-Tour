import { Attraction } from './attraction.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttractionInterface } from 'src/interfaces/attraction';

@Injectable()
export class AttractionService {
  constructor(
    @InjectModel('Attraction')
    private readonly attractionModel: Model<Attraction>,
  ) {}

  async getAttractions(): Promise<AttractionInterface[]> {
    const cities = await this.attractionModel.find();
    return cities.map((attraction) => ({
      id: attraction._id,
      name: attraction.name,
      key: attraction.key,
      shortDescription: attraction.shortDescription,
      description: attraction.description,
      img: attraction.img,
      region: attraction.region,
      prefecture: attraction.prefecture,
      city: attraction.city,
      highlight: attraction.highlight,
    }));
  }
}
