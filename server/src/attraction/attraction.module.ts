import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionController } from './attraction.controller';
import { AttractionSchema } from './attraction.entity';
import { AttractionService } from './attraction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Attraction', schema: AttractionSchema },
    ]),
  ],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
