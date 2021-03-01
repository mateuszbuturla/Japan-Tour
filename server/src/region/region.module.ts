import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionController } from "./region.controller";
import { RegionSchema } from "./region.model";
import { RegionService } from "./region.service";

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
