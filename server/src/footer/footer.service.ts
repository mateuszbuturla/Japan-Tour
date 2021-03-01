import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Footer } from "./footer.model";

@Injectable()
export class FooterService {
  constructor(
    @InjectModel("Footer") private readonly footerModel: Model<Footer>
  ) {}

  async getFooter() {
    const footerElements = await this.footerModel.find().exec();
    return footerElements.map((footerElement) => ({
      header: footerElement.header,
      data: footerElement.data,
    }));
  }
}
