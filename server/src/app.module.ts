import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegionModule } from "./region/region.module";
import { CityModule } from "./city/city.module";
import { AttractionModule } from "./attraction/attraction.module";
import { CultureModule } from "./culture/culture.module";
import { DishModule } from "./dish/dish.module";
import { CategoryModule } from "./category/category.module";
import { FooterModule } from "./footer/footer.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    RegionModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Japan"),
    CityModule,
    AttractionModule,
    CultureModule,
    DishModule,
    CategoryModule,
    FooterModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
