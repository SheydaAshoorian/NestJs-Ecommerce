import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellerEntity } from '@sellers/entities/seller.entity';
import { ApiTags, ApiOperation,ApiResponse } from '@nestjs/swagger';


@Controller('seller')
export class SellerController {

  constructor(private readonly sellerService: SellerService) {}

  @ApiOperation({ summary:   ' ایجاد فروشنده جدید' }) 
  @ApiResponse({ status: 201, type: SellerEntity }) 
  @Post()
  create(@Body() createSellerDto: CreateSellerDto) {
    return this.sellerService.create(createSellerDto);
  }

}
