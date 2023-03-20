import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('sum')
  getSum(@Query('num_1', ParseIntPipe) num1: number, @Query('num_2', ParseIntPipe) num2: number) {
    return num1 + num2;
  }
}
