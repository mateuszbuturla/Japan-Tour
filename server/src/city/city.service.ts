import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityInterface } from 'src/interfaces/city';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectModel('City')
    private readonly cityModel: Model<City>,
  ) {}

  async getCities(): Promise<CityInterface[]> {
    const cities = await this.cityModel.find();
    return cities.map((city) => ({
      id: city._id,
      name: city.name,
      key: city.key,
      shortDescription: city.shortDescription,
      description: city.description,
      img: city.img,
      region: city.region,
      prefecture: city.prefecture,
      highlight: city.highlight,
    }));
  }
}
