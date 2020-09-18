import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RegionsController } from "./regions.controller";
import { RegionsService } from "./regions.service";
import { RegionSchema } from "./region.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Region", schema: RegionSchema }]),
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
