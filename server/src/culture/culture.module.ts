import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CultureController } from "./culture.controller";
import { CultureService } from "./culture.service";
import { CultureSchema } from "./culture.model";
import { ActionHistoryModule } from "../actionHistory/actionHistory.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Culture", schema: CultureSchema }]),
    ActionHistoryModule,
  ],
  controllers: [CultureController],
  providers: [CultureService],
})
export class CultureModule {}
