import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionController } from './attraction.controller';
import { AttractionSchema } from './attraction.entity';
import { AttractionService } from './attraction.service';
import { RegionModule } from 'src/region/region.module';
import { PrefectureModule } from 'src/prefecture/prefecture.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attraction', schema: AttractionSchema },
    ]),
    forwardRef(() => RegionModule),
    forwardRef(() => PrefectureModule),
    forwardRef(() => CityModule),
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
