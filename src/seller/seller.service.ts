import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { BaseService } from '@common/base/base.servise'; 
import { RedisService } from '@songkeys/nestjs-redis';
import { PrismaService } from '@prisma/prisma.service';
import { SellerEntity } from '@sellers/entities/seller.entity';
import { Seller } from '@prisma/client';

@Injectable()
export class SellerService extends BaseService < Seller, CreateSellerDto, UpdateSellerDto, SellerEntity > {

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly redisService: RedisService
  ){

    super(prisma,'Seller', redisService, SellerEntity)
  }

}
