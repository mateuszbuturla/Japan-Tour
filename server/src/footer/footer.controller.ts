import { Controller, Get } from "@nestjs/common";
import { FooterService } from "./footer.service";

@Controller("/api/footer")
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get()
  async getAllRegions() {
    const footer = await this.footerService.getFooter();
    return footer;
  }
}
