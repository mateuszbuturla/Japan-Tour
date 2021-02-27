import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DishController } from "./dish.controller";
import { DishService } from "./dish.service";
import { DishSchema } from "./dish.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Dish", schema: DishSchema }]),
    ActionHistoryModule,
  ],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
