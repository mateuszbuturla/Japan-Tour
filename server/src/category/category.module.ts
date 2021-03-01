import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryController } from "./category.controller";
import { CategorySchema } from "./category.model";
import { CategoryService } from "./category.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Category", schema: CategorySchema }]),
    ActionHistoryModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
