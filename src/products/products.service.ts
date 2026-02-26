import { Injectable } from '@nestjs/common';
import { BaseService } from '@common/base/base.servise'; 
import { PrismaService } from '@prisma/prisma.service';
import { RedisService } from '@songkeys/nestjs-redis';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from '@products/entities/product.entity';

import { Product } from '@prisma/client';

@Injectable()
export class ProductsService extends BaseService<
  Product,
  CreateProductDto,
  UpdateProductDto,
  ProductEntity
> {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly redisService: RedisService,
  ) {
    // مدل رو دقیقا همون اسمی بذار که در schema.prisma نوشتی (احتمالا product)
    super(prisma, 'Product', redisService,ProductEntity);
  }
}
