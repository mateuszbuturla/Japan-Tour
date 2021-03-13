import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionModule } from './region/region.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/MojaJaponia'), RegionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
