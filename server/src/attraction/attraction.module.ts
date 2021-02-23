import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AttractionController } from "./attraction.controller";
import { AttractionService } from "./attraction.service";
import { AttractionSchema } from "./attraction.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Attraction", schema: AttractionSchema },
    ]),
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
