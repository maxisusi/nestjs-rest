import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3232323',
      name: 'Football',
      qty: 10,
      description: 'Made out of leather',
    },
    {
      id: '42391829',
      name: 'Bottle',
      qty: 43,
      description: 'Plastic water bottle',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
