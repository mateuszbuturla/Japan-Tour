import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { UserObj } from "../decorators/user-obj.decorator";
import { User } from "../user/user.model";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";

@Controller("/api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async phoneRegister(
    @Body() req: AuthLoginDto,
    @Res() res: Response
  ): Promise<any> {
    return this.authService.login(req, res);
  }

  @Get("/logout")
  @UseGuards(AuthGuard("jwt"))
  async logout(@UserObj() user: User, @Res() res: Response) {
    return this.authService.logout(user, res);
  }

  @Get("/getUser")
  @UseGuards(AuthGuard("jwt"))
  async getUser(@Res() res: Response, @Req() req: any) {
    return this.authService.getUser(req, res);
  }
}
