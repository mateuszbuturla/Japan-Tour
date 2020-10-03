import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AttractionsController } from "./attractions.controller";
import { AttractionsService } from "./attractions.service";
import { AttractionSchema } from "./attraction.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Attraction", schema: AttractionSchema },
    ]),
  ],
  controllers: [AttractionsController],
  providers: [AttractionsService],
})
export class AttractionsModule {}
