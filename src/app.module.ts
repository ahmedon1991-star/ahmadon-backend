import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/platform-express';
import { join } from 'path';

// استيراد الوحدات
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';

import { User } from './modules/users/entities/user.entity';
import { Product } from './modules/products/entities/product.entity';
import { Order } from './modules/orders/entities/order.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE_PATH || 'database.sqlite',
      entities: [User, Product, Order],
      synchronize: true,
    }),

    // تفعيل عرض ملفات الواجهة الأمامية
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'), 
      serveRoot: '/store', 
      exclude: ['/api/*'],
    }),

    UsersModule,
    ProductsModule,
    OrdersModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}