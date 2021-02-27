import * as mongoose from "mongoose";

export const ActionHistorySchema = new mongoose.Schema({
  section: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  action: { type: String, required: true },
});

export class ActionHistory extends mongoose.Document {
  section: string;
  name: string;
  url: string;
  author: string;
  date: string;
  action: string;
}
