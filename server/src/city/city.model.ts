import * as mongoose from "mongoose";

export const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  key: { type: String, required: true },
  region: { type: String, required: true },
  prefecture: { type: String, required: true },
  description: { type: String, required: false },
  shortDescription: { type: String, required: false },
  img: { type: String, required: true },
  otherData: { type: Array, required: false },
  highlighted: { type: Boolean, required: true },
});

export interface City extends mongoose.Document {
  name: string;
  url: string;
  key: string;
  region: string;
  prefecture: string;
  description?: string;
  shortDescription: string;
  img: string;
  otherData: { title: string; value: string }[];
  highlighted: boolean;
}
