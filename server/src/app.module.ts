import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegionsModule } from "./regions/regions.module";
import { CitiesModule } from "./cities/cities.module";
import { AttractionsModule } from "./Attractions/attractions.module";
import { CulturesModule } from "./Cultures/cultures.module";
import { DishesModule } from "./Dishes/dishes.module";
import { CategoriesModule } from "./categories/categories.module";

@Module({
  imports: [
    RegionsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Japan"),
    CitiesModule,
    AttractionsModule,
    CulturesModule,
    DishesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
