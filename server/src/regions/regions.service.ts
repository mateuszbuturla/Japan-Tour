import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Region } from "./region.model";
import NormalizeString from "../utils/normalizeString";

@Injectable()
export class RegionsService {
  constructor(
    @InjectModel("Region") private readonly regionModel: Model<Region>
  ) {}

  async getRegions() {
    const regions = await this.regionModel.find().exec();
    return regions.map((region) => ({
      name: region.name,
      url: region.url,
      key: region.key,
      description: region.description,
      img: region.img,
      otherData: region.otherData,
    }));
  }

  async getSingleRegion(key: string) {
    const region = await this.findRegion(key);
    return region;
  }

  private async findRegion(key: string): Promise<Region> {
    let region;
    try {
      region = await this.regionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find region.");
    }
    if (!region) {
      throw new NotFoundException("Could not find region.");
    }
    return region;
  }

  async updateRegion(key: string, data: Region) {
    let res;

    try {
      const newData = {
        name: data.name,
        url: NormalizeString(data.name),
        key: NormalizeString(data.name),
        description: data.description,
        img: data.img,
        otherData: data.otherData,
      };

      const updatedRegions = await this.regionModel.updateOne({ key }, newData);
      if (updatedRegions.n > 0) {
        res = {
          statusCode: 200,
          message: "Successfully updated.",
        };
      } else if (updatedRegions.n === 0) {
        throw new HttpException("Could not update region.", 409);
      }
    } catch (error) {
      throw new HttpException("Could not update region.", 409);
    }

    return res;
  }
}
