import { Body, Controller, Post } from '@nestjs/common';
import { AuthLogInDto, AuthSignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() dto: AuthSignUpDto) {
    const accessToken = await this.authService.signUp(dto);
    return { accessToken };
  }

  @Post('log-in')
  async logIn(@Body() dto: AuthLogInDto) {
    const accessToken = await this.authService.logIn(dto);
    return { accessToken };
  }
}
