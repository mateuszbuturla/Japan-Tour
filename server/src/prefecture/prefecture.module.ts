import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionModule } from "../region/region.module";
import { PrefectureController } from "./prefecture.controller";
import { PrefectureSchema } from "./prefecture.model";
import { PrefectureService } from "./prefecture.service";
import { AttractionModule } from "../attraction/attraction.module";
import { CityModule } from "../city/city.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Prefecture", schema: PrefectureSchema },
    ]),
    forwardRef(() => ActionHistoryModule),
    forwardRef(() => RegionModule),
    forwardRef(() => AttractionModule),
    forwardRef(() => CityModule),
  ],
  controllers: [PrefectureController],
  providers: [PrefectureService],
  exports: [PrefectureService],
})
export class PrefectureModule {}
