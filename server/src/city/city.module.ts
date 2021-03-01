import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { RegionModule } from "../region/region.module";
import { CityController } from "./city.controller";
import { CitySchema } from "./city.model";
import { CityService } from "./city.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "City", schema: CitySchema }]),
    ActionHistoryModule,
    RegionModule,
  ],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
