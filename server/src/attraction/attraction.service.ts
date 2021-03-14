import { Attraction } from './attraction.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getSingleAttraction(key: string): Promise<AttractionInterface> {
    const attraction = await this.findAttraction(key);

    return attraction;
  }

  private async findAttraction(key: string): Promise<AttractionInterface> {
    let attraction;
    try {
      attraction = await this.attractionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find attraction.');
    }
    if (!attraction) {
      throw new NotFoundException('Could not find attraction.');
    }
    return attraction;
  }
}
