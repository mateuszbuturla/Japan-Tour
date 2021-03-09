import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActionHistoryModule } from "./actionHistory/actionHistory.module";
import { AttractionModule } from "./attraction/attraction.module";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { CityModule } from "./city/city.module";
import { CultureModule } from "./culture/culture.module";
import { DishModule } from "./dish/dish.module";
import { FooterModule } from "./footer/footer.module";
import { RegionModule } from "./region/region.module";
import { UserModule } from "./user/user.module";
import { PrefectureModule } from "./prefecture/prefecture.module";

@Module({
  imports: [
    ActionHistoryModule,
    RegionModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Japan"),
    CityModule,
    AttractionModule,
    CultureModule,
    DishModule,
    CategoryModule,
    FooterModule,
    UserModule,
    AuthModule,
    PrefectureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
