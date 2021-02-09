import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { isNull } from "util";

import { Attraction } from "./attraction.model";
import NormalizeString from "../utils/normalizeString";

@Injectable()
export class AttractionsService {
  constructor(
    @InjectModel("Attraction")
    private readonly attractionModel: Model<Attraction>
  ) {}

  async getBestAttractionsFromRegion(region: string) {
    const attractions = await this.attractionModel
      .find({ region, bestAttractions: true })
      .exec();
    return attractions;
  }

  async getAllAttractionsFromCategory(category: string) {
    const attractions = await this.attractionModel.find({ category }).exec();
    return attractions;
  }

  async getAllAttractions() {
    const attractions = await this.attractionModel.find().exec();
    return attractions;
  }

  async getAllFromCity(city: string) {
    const attractions = await this.attractionModel.find({ city }).exec();
    return attractions;
  }

  async getSingleAttraction(key: string) {
    const attraction = await this.findAttraction(key);
    return attraction;
  }

  private async findAttraction(key: string): Promise<Attraction> {
    let attraction;
    try {
      attraction = await this.attractionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find attraction.");
    }
    if (!attraction) {
      throw new NotFoundException("Could not find attraction.");
    }
    return attraction;
  }

  async createAttraction(data: Attraction) {
    let res;
    const existAttraction = await this.attractionModel
      .findOne({
        $or: [
          { name: data.name },
          { url: NormalizeString(data.name) },
          { key: NormalizeString(data.name) },
        ],
      })
      .exec();

    if (isNull(existAttraction)) {
      const newAttraction = new this.attractionModel({
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        region: data.region,
        city: data.city,
        category: data.category,
        img: "hokkaido.jpg",
        bestAttractions: data.bestAttractions,
        otherData: data.otherData,
      });
      res = await newAttraction.save();
    } else {
      throw new HttpException("Attraction is exist.", 409);
    }

    return res;
  }

  async removeAttraction(key: string) {
    let res;

    try {
      const removedAttraction = await this.attractionModel.remove({ key });
      if (removedAttraction.deletedCount > 0) {
        res = {
          statusCode: 200,
          message: "Successfully deleted.",
        };
      } else if (removedAttraction.deletedCount === 0) {
        throw new HttpException("Could not remove attraction.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not remove attraction.", 409);
    }

    return res;
  }

  async updateAttraction(key: string, data: Attraction) {
    let res;

    try {
      const newData = {
        name: data.name,
        key: NormalizeString(data.name),
        url: NormalizeString(data.name),
        shortDescription: data.shortDescription,
        description: data.description,
        region: data.region,
        city: data.city,
        category: data.category,
        img: "hokkaido.png",
        bestAttractions: data.bestAttractions,
        otherData: data.otherData,
      };

      const updatedAttraction = await this.attractionModel.updateOne(
        { key },
        newData
      );
      if (updatedAttraction.nModified > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
      } else if (updatedAttraction.n === 0) {
        throw new HttpException("Could not update attraction.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update attraction.", 409);
    }

    return res;
  }
}
