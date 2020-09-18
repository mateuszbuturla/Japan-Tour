import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Region } from "./region.model";

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
}
