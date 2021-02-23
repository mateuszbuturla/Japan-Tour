import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DishController } from "./dish.controller";
import { DishService } from "./dish.service";
import { DishSchema } from "./dish.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Dish", schema: DishSchema }])],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
