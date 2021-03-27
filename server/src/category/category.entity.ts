import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  key: { type: String, required: true },
  description: { type: String, required: false },
  img: { type: String, required: true },
});

export interface Category extends mongoose.Document {
  _id: string;
  name: string;
  key: string;
  description?: string;
  img: string;
}
