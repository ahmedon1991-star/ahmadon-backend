import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تفعيل التحقق من البيانات
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  // إعداد Swagger
  const config = new DocumentBuilder()
    .setTitle('Ahmadon Backend API')
    .setDescription('API لتطبيق أحمدون للتعاون الاقتصادي')
    .setVersion('1.0')
    .addTag('auth', 'التسجيل والدخول')
    .addTag('users', 'إدارة المستخدمين')
    .addTag('products', 'إدارة المنتجات')
    .addTag('orders', 'إدارة الطلبات')
    .addTag('admin', 'لوحة التحكم')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();