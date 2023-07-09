import { AuthService } from './auth.service';
import { endpoints } from './business/constants/endpoints';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginBuisnesDto } from './business/dto/businesDtos/login-business.dto';
import { RegisterBusinesDto } from './business/dto/businesDtos/create-register-business.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(endpoints.REGISTER)
  async RegisterBusines(@Body() buisnes : RegisterBusinesDto) {
    console.log(buisnes);
    //TO DO JWT TOKEN
    return this.authService.RegisterBusinesAsync(buisnes);
  }

  @Post(endpoints.LOGIN)
  async LoginBusines(@Body() buisnes : LoginBuisnesDto) {
    console.log(buisnes);
    return this.authService.LoginAsync(buisnes);
  }
}
