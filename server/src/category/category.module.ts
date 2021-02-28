import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { CategorySchema } from "./category.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Category", schema: CategorySchema }]),
    ActionHistoryModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
