import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegionsModule } from "./regions/regions.module";
import { CitiesModule } from "./cities/cities.module";
import { AttractionsModule } from "./Attractions/attractions.module";
import { CulturesModule } from "./Cultures/cultures.module";

@Module({
  imports: [
    RegionsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Japan"),
    CitiesModule,
    AttractionsModule,
    CulturesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
