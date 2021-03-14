import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from './city.controller';
import { CitySchema } from './city.entity';
import { CityService } from './city.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
