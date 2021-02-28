import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CityController } from "./city.controller";
import { CityService } from "./city.service";
import { CitySchema } from "./city.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionModule } from "../region/region.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "City", schema: CitySchema }]),
    ActionHistoryModule,
    RegionModule,
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
