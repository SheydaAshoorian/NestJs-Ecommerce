import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { BaseService } from '@common/base/base.service';
import { redisServices } from '@songkeys/nestjs-redis';
import { PrismaService } from '@prisma/prisma.service';
import { Seller } from '@prisma/client';

@Injectable()
export class SellerService extends BaseService < Seller, CreateProductDto, UpdateProductDto > {

  constructure(
    protected readonly prisma: PrismaService,
    protected readonly redisService: RedisService
  ){

    super(prisma,'Seller', redisServices)
  }

}
