import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PersonalData, PersonalDataDocument } from './app.schema';
import { Model } from 'mongoose';

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
    const applicant = (personData) => {
      if (personData.type === 'GodParent') {
        return `장바구니가 필요한 분`;
      }
      return `장바구니를 지원해주실 분`;
    };
    new this.personalDataModel(personData).save();
    return `성공적으로 등록되었습니다. 주변에 ${applicant(
      personData,
    )}이 계시면 이메일로 알려드리겠습니다.`;
  }
}
