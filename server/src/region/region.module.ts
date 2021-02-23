import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RegionController } from "./region.controller";
import { RegionService } from "./region.service";
import { RegionSchema } from "./region.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Region", schema: RegionSchema }]),
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
