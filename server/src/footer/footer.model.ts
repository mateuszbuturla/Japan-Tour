import * as mongoose from "mongoose";

export const FooterSchema = new mongoose.Schema({
  header: { type: String, required: true },
  data: { type: Array, required: true },
});

export interface Footer extends mongoose.Document {
  header: string;
  data: {
    title: string;
    url: string;
  }[];
}
