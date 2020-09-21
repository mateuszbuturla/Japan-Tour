import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CulturesCategoriesController } from "./culturesCategories.controller";
import { CulturesCategoriesService } from "./culturesCategories.service";
import { CultureCategorySchema } from "./cultureCategory.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "CultureCategory", schema: CultureCategorySchema },
    ]),
  ],
  controllers: [CulturesCategoriesController],
  providers: [CulturesCategoriesService],
})
export class CulturesCategoriesModule {}
