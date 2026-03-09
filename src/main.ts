import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection, getRepository } from 'typeorm';
import { Product } from './modules/products/entities/product.entity';
import { createProducts } from './data/products.seed'; // استدعاء البيانات

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐
  // هذا هو الحل السحري لمشكلة Failed to Fetch
  app.enableCors({ 
    origin: '*',          // السماح بأي موقع
    methods: 'GET, POST, PUT, DELETE', // السماح بالطلب
    credentials: true,   // السماح بالكوكيز لو محتاجين
  });
  // ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐ ⭐⭐⭐

  try {
    console.log('⚙️ جاري الاتصال بقاعدة البيانات...');
    await createConnection();
    
    const productRepo = getRepository(Product);
    const count = await productRepo.count();

    if (count === 0) {
      console.log('📦 القاعدة فارغة... جاري تعبئة المنتجات الفخمة! ✨');
      
      const newData = await createProducts();
      await productRepo.save(newData);
      
      console.log(`✅ تم إضافة ${newData.length} منتج بنجاح! 🎉`);
    } else {
      console.log(`💾 موجود بالفعل ${count} منتج.`);
    }

  } catch (error) {
    console.error('⚠️ خطأ:', error.message);
  }

  await app.listen(3000);
  console.log('🔥 الموقع شغال الآن! 👈 افتح الرابط!');
}

bootstrap();