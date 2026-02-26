import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '@prisma/prisma.service';
import { RedisService } from '@songkeys/nestjs-redis';
import { Category } from '@prisma/client';
import { CategoryEntity } from '@category/entities/category.entity';

import { BaseService } from '@common/base/base.servise'; 

@Injectable()
export class CategoriesService extends BaseService < Category , CreateCategoryDto , UpdateCategoryDto,CategoryEntity > {

constructor(
    protected readonly prisma: PrismaService,
    protected readonly redisService: RedisService,
  ) { 
    
    super(prisma, 'category', redisService,CategoryEntity); 
    
  }
}

