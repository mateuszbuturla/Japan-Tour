import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "src/decorators/user-obj.decorator";
import { User } from "src/interface/User";
import { Kitchen } from "./kitchen.model";
import { KitchenService } from "./kitchen.service";

@Controller("/api/kitchens")
export class KitchenController {
  constructor(private readonly KitchenService: KitchenService) {}

  @Get()
  async getAllKitchens() {
    const regions = await this.KitchenService.getKitchens();
    return regions;
  }

  @Post("create")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateKitchenSchema))
  createKitchen(@Body() data: Kitchen, @UserObj() user: User) {
    return this.KitchenService.createKitchen(data, user);
  }

  @Delete("remove/:id")
  @UseGuards(AuthGuard("jwt"))
  removeKitchen(@Param("id") id: string, @UserObj() user: User) {
    return this.KitchenService.removeKitchen(id, user);
  }

  @Patch("update/:key")
  @UseGuards(AuthGuard("jwt"))
  // @UsePipes(new JoiValidationPipe(AddUpdateKitchenSchema))
  updateKitchen(
    @Param("key") key: string,
    @Body() data: Kitchen,
    @UserObj() user: User
  ) {
    return this.KitchenService.updateKitchen(key, data, user);
  }

  @Get(":key")
  getSingleKitchen(@Param("key") key: string) {
    return this.KitchenService.getSingleKitchen(key);
  }
}
