import { Injectable } from '@nestjs/common';
import { BaseService } from '@common/base/base.servise'; // دقت کن اسم فایل سِرویس رو چطوری ذخیره کردی
import { PrismaService } from '@prisma/prisma.service';
import { RedisService } from '@songkeys/nestjs-redis';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService extends BaseService<any, CreateProductDto, UpdateProductDto> {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly redisService: RedisService,
  ) {
    // مدل رو دقیقا همون اسمی بذار که در schema.prisma نوشتی (احتمالا product)
    super(prisma, 'product', redisService);
  }
}