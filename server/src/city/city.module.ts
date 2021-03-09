import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionModule } from "../region/region.module";
import { CityController } from "./city.controller";
import { CitySchema } from "./city.model";
import { CityService } from "./city.service";
import { AttractionModule } from "../attraction/attraction.module";
import { PrefectureModule } from "../prefecture/prefecture.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "City", schema: CitySchema }]),
    forwardRef(() => ActionHistoryModule),
    forwardRef(() => RegionModule),
    forwardRef(() => AttractionModule),
    forwardRef(() => PrefectureModule),
  ],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
