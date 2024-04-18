import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import type { ResponseData } from '../responseData';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('login')
  login(@Body() request: any): ResponseData {
    return this.userService.login(request);
  }
}
