import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { City } from "./city.model";

@Injectable()
export class CitiesService {
  constructor(@InjectModel("City") private readonly cityModel: Model<City>) {}

  async getCities() {
    const cities = await this.cityModel.find().exec();
    return cities.map((city) => ({
      name: city.name,
      url: city.url,
      key: city.key,
      description: city.description,
      img: city.img,
      region: city.region,
      otherData: city.otherData,
    }));
  }

  async getSingleCity(key: string) {
    const city = await this.findRegion(key);
    return city;
  }

  private async findRegion(key: string): Promise<City> {
    let city;
    try {
      city = await this.cityModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find city.");
    }
    if (!city) {
      throw new NotFoundException("Could not find city.");
    }
    return city;
  }
}
