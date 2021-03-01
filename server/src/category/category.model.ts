import * as mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  key: { type: String, required: true },
  section: { type: String, required: true },
  img: { type: String, required: true },
});

export interface Category extends mongoose.Document {
  name: string;
  key: string;
  section: string;
  img: string;
}
