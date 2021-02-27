import { Controller, Get } from "@nestjs/common";

import { ActionHistoryService } from "./actionHistory.service";

@Controller("/api/edithistory")
export class ActionHistoryController {
  constructor(private readonly ActionHistoryService: ActionHistoryService) {}
}
