import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { User } from "../user/user.model";
import { hashPwd } from "../utils/hash-pwd";
import { v4 as uuid } from "uuid";
import { sign } from "jsonwebtoken";
import { JwtPayload } from "./jwt.strategy";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  private createToken(
    currentTokenId: string
  ): { accessToken: string; expiresIn: number } {
    const payload: JwtPayload = { id: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(payload, "123", { expiresIn });
    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;
    do {
      token = uuid();
      userWithThisToken = await this.userModel.find({ token }).exec();
    } while (!userWithThisToken);
    user.token = token;

    const newData = {
      email: user.email,
      pass: user.pass,
      token: token,
    };

    const tt = await this.userModel
      .updateOne({ email: user.email }, newData)
      .exec();

    return token;
  }

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await this.userModel
        .findOne({ email: req.email, pass: hashPwd(req.pass) })
        .exec();

      if (!user) {
        return res.json({ error: "Invalid login data!" });
      }

      const token = await this.createToken(await this.generateToken(user));

      return res
        .cookie("jwt", token.accessToken, {
          secure: false,
          domain: "localhost",
          httpOnly: true,
        })
        .json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.token = null;
      await this.userModel.updateOne({ _id: user._id }, user);
      res.clearCookie("jwt", {
        secure: false,
        domain: "localhost",
        httpOnly: true,
      });
      return res.json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async getUser(req, res: Response) {
    return res.json(req.user);
  }
}
