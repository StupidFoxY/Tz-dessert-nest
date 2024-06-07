import { Controller, Get, Query, Post, Body, Headers, Put, Param, Delete } from '@nestjs/common';

import { SweetService } from './sweet.service';
import type { ResponseData } from '../responseData';

@Controller('sweet')
export class SweetController {
  constructor(private readonly sweetService: SweetService) {}

  @Get()
  getSweetList(): ResponseData {
    return this.sweetService.getSweetList();
  }
}
