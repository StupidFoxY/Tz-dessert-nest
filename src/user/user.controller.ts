import { Controller, Get, Query, Post, Body, Headers, Put, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
import type { ResponseData } from '../responseData';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserInfo(@Headers()headers: any): ResponseData {
    return this.userService.getUserInfo(headers.authorization);
  }

  @Post('login')
  login(@Body() request: any): ResponseData {
    return this.userService.login(request);
  }
}
