import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { People } from './entities/people.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getAll();
  }

  @Post()
  async create(@Body() personData) {
      return this.appService.create(personData)
  }
}
