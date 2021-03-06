import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionController } from "./region.controller";
import { RegionSchema } from "./region.model";
import { RegionService } from "./region.service";
import { CityModule } from "../city/city.module";
import { AttractionModule } from "../attraction/attraction.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Region", schema: RegionSchema }]),
    forwardRef(() => ActionHistoryModule),
    forwardRef(() => CityModule),
    forwardRef(() => AttractionModule),
  ],
  controllers: [RegionController],
  providers: [RegionService],
  exports: [RegionService],
})
export class RegionModule {}
