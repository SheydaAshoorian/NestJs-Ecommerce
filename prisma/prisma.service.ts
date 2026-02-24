import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    // تنظیمات لاگ برای مانیتور کردن کوئری‌ها
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
    });
  }

  async onModuleInit() {
    await this.$connect();
    
    // جادوی مانیتورینگ: اگر کوئری بیشتر از ۱۰۰ میلی‌ثانیه طول کشید، خبرمون کن!
    // @ts-ignore
    this.$on('query', (e: any) => {
      if (e.duration >= 100) {
        this.logger.warn(`Slow Query: ${e.query}`);
        this.logger.warn(`Duration: ${e.duration}ms`);
      }
    });
    
    this.logger.log('Database connected successfully');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}