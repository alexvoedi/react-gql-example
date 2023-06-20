import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;
}
