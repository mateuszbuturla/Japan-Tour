import { Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { hashPwd } from "../utils/hash-pwd";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  filter(user: User) {
    const { _id, email } = user;
    return { _id, email };
  }

  async register(data: RegisterDto) {
    const newUser = new this.userModel({
      email: data.email,
      pass: hashPwd(data.pass),
    });
    const res = await newUser.save();

    return this.filter(res);
  }
}
