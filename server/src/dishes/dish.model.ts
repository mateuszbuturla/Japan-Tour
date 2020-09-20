import * as mongoose from "mongoose";

export const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  key: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: Array, required: true },
  otherData: { type: Array, required: false },
});

export interface Dish extends mongoose.Document {
  name: string;
  category: string;
  img: string;
  key: string;
  shortDescription: string;
  description: { type: "text" | "img"; value: string }[];
  otherData: { title: string; value: string }[];
}
