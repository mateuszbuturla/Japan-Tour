import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";
import NormalizeString from "../utils/normalizeString";

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

  async createCity(data: City) {
    let res;
    const existCity = await this.cityModel
      .findOne({
        $or: [
          { name: data.name },
          { url: NormalizeString(data.name) },
          { key: NormalizeString(data.name) },
        ],
      })
      .exec();

    if (isNull(existCity)) {
      const newCity = new this.cityModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        region: data.region,
        description: data.description,
        img: data.img,
        otherData: data.otherData,
      });
      res = await newCity.save();
    } else {
      throw new HttpException("City is exist.", 409);
    }

    return res;
  }
}
