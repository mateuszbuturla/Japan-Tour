import { Controller, Get } from "@nestjs/common";
import { ActionHistoryService } from "./actionHistory.service";

@Controller("/api/edithistory")
export class ActionHistoryController {
  constructor(private readonly ActionHistoryService: ActionHistoryService) {}

  @Get()
  async getLatest15ActionHistoryItems() {
    const latest10ActionHistoryItems = await this.ActionHistoryService.getLatest15ActionHistoryItems();
    return latest10ActionHistoryItems;
  }
}
