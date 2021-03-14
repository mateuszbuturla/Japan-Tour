import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrefectureController } from './prefecture.controller';
import { PrefectureSchema } from './prefecture.entity';
import { PrefectureService } from './prefecture.service';
import { RegionModule } from 'src/region/region.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Prefecture', schema: PrefectureSchema },
    ]),
    forwardRef(() => RegionModule),
  ],
  controllers: [PrefectureController],
  providers: [PrefectureService],
  exports: [PrefectureService],
})
export class PrefectureModule {}
