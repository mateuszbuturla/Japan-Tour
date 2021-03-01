import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ActionHistoryController } from "./actionHistory.controller";
import { ActionHistoryService } from "./actionHistory.service";
import { ActionHistorySchema } from "./actionHistory.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "ActionHistory", schema: ActionHistorySchema },
    ]),
  ],
  controllers: [ActionHistoryController],
  providers: [ActionHistoryService],
  exports: [ActionHistoryService],
})
export class ActionHistoryModule {}
