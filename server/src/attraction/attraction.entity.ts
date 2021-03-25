import * as mongoose from 'mongoose';

export const AttractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  key: { type: String, required: true },
  description: { type: String, required: false },
  shortDescription: { type: String, required: true },
  img: { type: String, required: true },
  region: { type: String, required: true },
  prefecture: { type: String, required: true },
  city: { type: String, required: false },
  highlight: { type: Boolean, required: true },
  category: { type: String, required: true}
});

export interface Attraction extends mongoose.Document {
  _id: string;
  name: string;
  key: string;
  description?: string;
  shortDescription: string;
  img: string;
  region: string;
  prefecture: string;
  city?: string;
  highlight: boolean;
  category:string;
}
