import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";
import { CategoryModule } from "../category/category.module";
import { CultureController } from "./culture.controller";
import { CultureSchema } from "./culture.model";
import { CultureService } from "./culture.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Culture", schema: CultureSchema }]),
    ActionHistoryModule,
    CategoryModule,
  ],
  controllers: [CultureController],
  providers: [CultureService],
})
export class CultureModule {}
