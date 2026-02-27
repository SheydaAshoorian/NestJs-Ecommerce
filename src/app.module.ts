import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from '@prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { RedisModule } from '@songkeys/nestjs-redis';
import { SellerModule } from './seller/seller.module';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProductsModule,
    PrismaModule,
    CategoriesModule,
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    SellerModule,
    ShopModule,
    UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
