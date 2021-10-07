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

  async findOne(id) {
    const applicant = await this.personalDataModel.findOne(id);
    if (!applicant) {
      return null;
    }
    return applicant;
  }

  // async update(id, matchData) {
  //   const userInfo = await this.personalDataModel.findOne(id);
  //   if (userInfo === null) {
  //     return null;
  //   }
  //   const updateUserInfo = Object.assign(userInfo, {
  //     match: matchData,
  //   });
  //   return await this.personalDataModel.save(updateUserInfo);
  // }

  // async matchStatus({ parentId, childId, date }) {
  //   const parentInfo = await this.personalDataModel.findOne(parentId);
  //   const childInfo = await this.personalDataModel.findOne(childId);
  //   const parentUpdate = Object.assign(parentInfo, {
  //     match: {
  //       matched: childId,
  //       date,
  //     },
  //   });
  //   const childUpdate = Object.assign(childInfo, {
  //     match: {
  //       matched: parentId,
  //       date,
  //     },
  //   });
  // }

  create(personData) {
    new this.personalDataModel(personData).save();
  }
}
