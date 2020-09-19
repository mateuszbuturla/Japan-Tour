import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CulturesController } from "./cultures.controller";
import { CulturesService } from "./cultures.service";
import { CultureSchema } from "./culture.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Culture", schema: CultureSchema }]),
  ],
  controllers: [CulturesController],
  providers: [CulturesService],
})
export class CulturesModule {}
