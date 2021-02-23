import { Body, Controller, Inject, Post, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterDto } from "./dto/register.dto";
import { JoiValidationPipe } from "../pipes/JoiValidationPipe";
import { RegisterUserValidation } from "./validation/user.validation.schema";

@Controller("/api/user")
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Post("/register")
  @UsePipes(new JoiValidationPipe(RegisterUserValidation))
  register(@Body() newUser: RegisterDto) {
    return this.userService.register(newUser);
  }
}
