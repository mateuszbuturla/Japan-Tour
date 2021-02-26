import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  pass: { type: String, required: true },
  email: { type: String, required: true },
  token: { type: String, required: false },
});

export interface User extends mongoose.Document {
  _id: string;
  pass: string;
  email: string;
  token: string | null;
}