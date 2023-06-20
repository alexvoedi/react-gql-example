import { Injectable } from '@nestjs/common';
import * as addresses from '../../data/addresses.json';

@Injectable()
export class AddressService {
  async getByPartialName(partialName: string) {
    return await addresses.filter((address) =>
      address.name.toLowerCase().includes(partialName.toLowerCase()),
    );
  }
}
