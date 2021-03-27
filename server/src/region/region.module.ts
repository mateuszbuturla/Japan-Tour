import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';
import { RegionSchema } from './region.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Region', schema: RegionSchema }]),
  ],
  controllers: [RegionController],
  providers: [RegionService],
  exports: [RegionService],
})
export class RegionModule {}
