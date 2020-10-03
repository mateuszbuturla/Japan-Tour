import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { FooterController } from "./footer.controller";
import { FooterService } from "./footer.service";
import { FooterSchema } from "./footer.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Footer", schema: FooterSchema }]),
  ],
  controllers: [FooterController],
  providers: [FooterService],
})
export class FooterModule {}
