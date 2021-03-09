import * as mongoose from "mongoose";

export const AttractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  key: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true },
  prefecture: { type: String, required: true },
  city: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  highlighted: { type: Boolean, required: true },
  otherData: { type: Array, required: false },
});

export class Attraction extends mongoose.Document {
  name: string;
  url: string;
  key: string;
  shortDescription: string;
  description: string;
  region: string;
  prefecture: string;
  city: string;
  category: string;
  highlighted: boolean;
  img: string;
  otherData: { title: string; value: string }[];
}
