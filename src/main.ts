import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // transfor-validator config 
  app.useGlobalPipes(new ValidationPipe({
  whitelist: true, // فیلدهای اضافه را حذف می‌کند
  transform: true, // جادوی تبدیل نوع را فعال می‌کند
  transformOptions: {
    enableImplicitConversion: true, // تبدیل هوشمند انواع ساده
  },
}));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
