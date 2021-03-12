import * as mongoose from 'mongoose';

export const RegionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  key: { type: String, required: true },
  description: { type: String, required: false },
  shortDescription: { type: String, required: true },
  img: { type: String, required: true },
});

export interface Region extends mongoose.Document {
  name: string;
  url: string;
  key: string;
  description?: string;
  shortDescription: string;
  img: string;
}
