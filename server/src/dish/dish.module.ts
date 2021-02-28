import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DishController } from "./dish.controller";
import { DishService } from "./dish.service";
import { DishSchema } from "./dish.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Dish", schema: DishSchema }]),
    ActionHistoryModule,
    CategoryModule,
  ],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
