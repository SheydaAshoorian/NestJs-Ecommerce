import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //**************** transfor-validator config  ********************** */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // فیلدهای اضافه را حذف می‌کند
      transform: true, // جادوی تبدیل نوع را فعال می‌کند
      transformOptions: { enableImplicitConversion: true }, // تبدیل هوشمند انواع ساده,
    }),
  );

  //***************************** فعال‌سازی اینترسپتور به صورت سراسری********************************* */
  // اول باید Reflector رو بگیریم چون اینترسپتور برای خوندن دکوراتورها بهش نیاز داره
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  //********************* برای استانداردسازی خروجی (Data Wrap)************************
  app.useGlobalInterceptors(new TransformInterceptor());

  //******************** تنظیمات سواگر ********************* */ 
  const config = new DocumentBuilder()
    .setTitle('Sales Project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);



  //************* تنظیم پورت یک اند************ */
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
