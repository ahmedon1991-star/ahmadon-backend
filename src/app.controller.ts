import { Controller, Get } from '@nestjs/common';
import { readFileSync } from 'fs'; // استدعاء قراءة الملفات
import { join } from 'path';      // استدعاء معالجة المسارات
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(): string {
    // هذا السطر هو الحل: 
    // process.cwd() يأخذك لجذر المشروع دائماً (بغض النظر عن تشغيله من dist أو src)
    const filePath = join(process.cwd(), 'src', 'public', 'index.html');

    try {
      return readFileSync(filePath, 'utf8'); // قراءة الملف وإرجاع محتواه
    } catch (error) {
      // رسالة الخطأ ستوضح مكان البحث إذا كان الخطأ مستمراً
      return `<h1 style="color:red; text-align:center;">عذراً، الملف غير موجود في: ${filePath}</h1>`;
    }
  }

  getHello(): string {
    return this.appService.getHello();
  }
}