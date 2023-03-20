import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('sum')
  getSum(@Query('num_1', ParseIntPipe) num1: number, @Query('num_2', ParseIntPipe) num2: number) {
    return num1 + num2;
  }

  @Get()
  getHello() {
    return 'Hello World!';
  }

  @Get('test1')
  test1() {
    return 'this is test1';
  }

  @Get('test2')
  test2() {
    return 'this is test2';
  }

  @Get('test3')
  test3() {
    return 'this is test3';
  }
}
