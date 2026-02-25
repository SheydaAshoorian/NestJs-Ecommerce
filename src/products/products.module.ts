import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../../prisma/prisma.module'; 
import { RedisModule } from '@songkeys/nestjs-redis';

@Module({

  
  imports: [
    PrismaModule, 
    RedisModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
