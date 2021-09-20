import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonalDataDocument = PersonalData & Document;

@Schema()
export class PersonalData {
  @Prop()
  type: string;

  @Prop()
  reason: string;

  @Prop()
  plan: string;

  @Prop()
  duration: string;

  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: string;

  @Prop()
  address: string;

  @Prop()
  email: string;
}

export const PersonalDataSchema = SchemaFactory.createForClass(PersonalData);
