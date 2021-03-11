import * as mongoose from "mongoose";

export const PrefectureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  key: { type: String, required: true },
  region: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  img: { type: String, required: true },
  otherData: { type: Array, required: false },
  highlighted: { type: Boolean, required: true },
});

export interface Prefecture extends mongoose.Document {
  name: string;
  url: string;
  key: string;
  region: string;
  description: string;
  shortDescription: string;
  img: string;
  otherData: { title: string; value: string }[];
  highlighted: boolean;
}
