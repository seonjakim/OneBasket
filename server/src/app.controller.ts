import { Body, Controller, Get, Post, Put, Patch, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('admin')
  getAll() {
    return this.appService.getAll();
  }

  @Post()
  async create(@Body() personData) {
    return this.appService.create(personData);
  }

  // @Patch('match')
  // updateMatchStatus(@Req() request: Request) {
  //   return this.appService.matchStatus(request);
  // }
}
