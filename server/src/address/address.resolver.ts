import { Args, Query, Resolver } from '@nestjs/graphql';
import { Address } from './address';
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Query(() => [Address])
  async getByPartialName(@Args('name') name: string) {
    return await this.addressService.getByPartialName(name);
  }
}
