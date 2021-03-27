import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionController } from './attraction.controller';
import { AttractionSchema } from './attraction.entity';
import { AttractionService } from './attraction.service';
import { RegionModule } from 'src/region/region.module';
import { PrefectureModule } from 'src/prefecture/prefecture.module';
import { CityModule } from 'src/city/city.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attraction', schema: AttractionSchema },
    ]),
    forwardRef(() => RegionModule),
    forwardRef(() => PrefectureModule),
    forwardRef(() => CityModule),
    forwardRef(() => CategoryModule)
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
