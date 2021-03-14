import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionModule } from './region/region.module';
import { PrefectureModule } from './prefecture/prefecture.module';
import { CityModule } from './city/city.module';
import { AttractionModule } from './attraction/attraction.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/MojaJaponia'), RegionModule, PrefectureModule, CityModule, AttractionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
