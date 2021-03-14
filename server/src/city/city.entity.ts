import * as mongoose from 'mongoose';

export const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  key: { type: String, required: true },
  description: { type: String, required: false },
  shortDescription: { type: String, required: true },
  img: { type: String, required: true },
  region: { type: String, required: true },
  prefecture: { type: String, required: true },
  highlight: { type: Boolean, required: true },
});

export interface City extends mongoose.Document {
  _id: string;
  name: string;
  key: string;
  description?: string;
  shortDescription: string;
  img: string;
  region: string;
  prefecture: string;
  highlight: boolean;
}
