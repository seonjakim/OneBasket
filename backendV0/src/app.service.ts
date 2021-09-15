import { Injectable } from '@nestjs/common';
import { People } from './entities/people.entity';

@Injectable()
export class AppService {
  private people: People[] = []

  getAll():People[] {
    return this.people
  }

  create(personData) {
    this.people.push({
      id: this.people.length + 1,
      ...personData
    })
  }
}
