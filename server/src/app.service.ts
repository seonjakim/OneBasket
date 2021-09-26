import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonalData, PersonalDataDocument } from './app.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(PersonalData.name)
    private readonly personalDataModel: Model<PersonalDataDocument>,
  ) {}

  getAll(): Promise<PersonalData[]> {
    return this.personalDataModel.find().exec();
  }

  create(personData) {
    new this.personalDataModel(personData).save();
  }
}
