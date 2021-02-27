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
    } catch (err) {}
  }
}
