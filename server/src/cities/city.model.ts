import * as mongoose from "mongoose";

export const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  key: { type: String, required: true },
  region: { type: String, required: true },
  description: { type: Array, required: true },
  img: { type: String, required: true },
  otherData: { type: Array, required: false },
});

export interface City extends mongoose.Document {
  name: string;
  url: string;
  key: string;
  region: string;
  description: { type: "text" | "img"; value: string }[];
  img: string;
  otherData: { title: string; value: string }[];
}
