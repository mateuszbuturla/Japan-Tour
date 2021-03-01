import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";
import { DishController } from "./dish.controller";
import { DishSchema } from "./dish.model";
import { DishService } from "./dish.service";

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
