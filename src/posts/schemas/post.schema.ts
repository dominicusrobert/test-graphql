import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@ObjectType()
@Schema()
export class Posts {
  @Field(() => ID)
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Field()
  @Prop()
  title: string;
}

export type PostDocument = Posts & Document;
export const PostSchema = SchemaFactory.createForClass(Posts);
