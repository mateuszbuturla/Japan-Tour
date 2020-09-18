import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegionsModule } from "./regions/regions.module";

@Module({
  imports: [
    RegionsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Japan"),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
