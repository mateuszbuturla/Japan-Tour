import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrefectureController } from './prefecture.controller';
import { PrefectureSchema } from './prefecture.entity';
import { PrefectureService } from './prefecture.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Prefecture', schema: PrefectureSchema },
    ]),
  ],
  controllers: [PrefectureController],
  providers: [PrefectureService],
})
export class PrefectureModule {}
