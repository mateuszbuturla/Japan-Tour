import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from './city.controller';
import { CitySchema } from './city.entity';
import { CityService } from './city.service';
import { RegionModule } from 'src/region/region.module';
import { PrefectureModule } from 'src/prefecture/prefecture.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]),
    forwardRef(() => RegionModule),
    forwardRef(() => PrefectureModule),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
