import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";
import { KitchenController } from "./kitchen.controller";
import { KitchenSchema } from "./kitchen.model";
import { KitchenService } from "./kitchen.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Kitchen", schema: KitchenSchema }]),
    ActionHistoryModule,
    CategoryModule,
  ],
  controllers: [KitchenController],
  providers: [KitchenService],
})
export class KitchenModule {}
