import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RegionController } from "./region.controller";
import { RegionService } from "./region.service";
import { RegionSchema } from "./region.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Region", schema: RegionSchema }]),
    ActionHistoryModule,
  ],
  controllers: [RegionController],
  providers: [RegionService],
  exports: [RegionService],
})
export class RegionModule {}
