import * as mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  key: { type: String, required: true },
  section: { type: String, required: true },
});

export interface Category extends mongoose.Document {
  title: string;
  key: string;
  section: string;
}
