import * as mongoose from "mongoose";

export const CultureCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  key: { type: String, required: true },
});

export interface CultureCategory extends mongoose.Document {
  title: string;
  key: string;
}
