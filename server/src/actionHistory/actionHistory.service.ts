import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { ActionHistory } from "./actionHistory.model";

@Injectable()
export class ActionHistoryService {
  constructor(
    @InjectModel("ActionHistory")
    private readonly actionHistoryModel: Model<ActionHistory>
  ) {}

  async addNewItem(data: any) {
    try {
      const newItem = new this.actionHistoryModel(data);
      await newItem.save();
    } catch (err) {
      console.log(err);
    }
  }

  async getLatest15ActionHistoryItems() {
    const attractions = await this.actionHistoryModel
      .find()
      .sort({ _id: -1 })
      .limit(15);
    return attractions;
  }
}
