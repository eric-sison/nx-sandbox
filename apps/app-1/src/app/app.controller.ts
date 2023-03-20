import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('sum')
  getSum(@Query('num_1', ParseIntPipe) num1: number, @Query('num_2', ParseIntPipe) num2: number) {
    return num1 + num2;
  }
}
