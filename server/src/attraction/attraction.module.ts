import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AttractionController } from "./attraction.controller";
import { AttractionService } from "./attraction.service";
import { AttractionSchema } from "./attraction.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";
import { RegionModule } from "../region/region.module";
import { CityModule } from "../city/city.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Attraction", schema: AttractionSchema },
    ]),
    ActionHistoryModule,
    CategoryModule,
    RegionModule,
    CityModule,
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
