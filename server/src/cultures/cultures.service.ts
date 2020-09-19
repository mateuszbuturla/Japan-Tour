import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Culture } from "./culture.model";

@Injectable()
export class CulturesService {
  constructor(
    @InjectModel("Culture") private readonly cultureModel: Model<Culture>
  ) {}

  async getCultures() {
    const cultures = await this.cultureModel.find().exec();
    return cultures;
  }

  async getSingleCulture(key: string) {
    const culture = await this.findCulture(key);
    return culture;
  }

  private async findCulture(key: string): Promise<Culture> {
    let culture;
    try {
      culture = await this.cultureModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find culture.");
    }
    if (!culture) {
      throw new NotFoundException("Could not find culture.");
    }
    return culture;
  }
}
