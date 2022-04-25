import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // * Get all items
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // * Get single item
  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  // * Create new item
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Created - Name: ${createItemDto.name} Desc: ${createItemDto.description} Qty: ${createItemDto.quantity}`;
  }

  // * Delete Item
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item Deleted: ${id}`;
  }

  // * Update Item
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto): string {
    return `Uptated - Name: ${updateItemDto.name} Desc: ${updateItemDto.description} Qty: ${updateItemDto.quantity}`;
  }
}
