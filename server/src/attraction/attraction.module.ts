import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";
import { CityModule } from "../city/city.module";
import { RegionModule } from "../region/region.module";
import { AttractionController } from "./attraction.controller";
import { AttractionSchema } from "./attraction.model";
import { AttractionService } from "./attraction.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Attraction", schema: AttractionSchema },
    ]),
    forwardRef(() => ActionHistoryModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => RegionModule),
    forwardRef(() => CityModule),
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
  exports: [AttractionService],
})
export class AttractionModule {}
