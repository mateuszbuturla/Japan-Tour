import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionModule } from './region/region.module';
import { PrefectureModule } from './prefecture/prefecture.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/MojaJaponia'), RegionModule, PrefectureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
