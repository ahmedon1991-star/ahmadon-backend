export const createProducts = async () => {
  return [
    {
      name: 'iPhone 15 Pro Max',
      description: 'هاتف أبل الأقوى مع معالج A17 Pro وكاميرا احترافية بدقة 48 ميجابكسل.',
      price: 1199, // لاحظ أنه رقم (Number) ليتوافق مع التعديل السابق
      stock: 15,
      category: 'هواتف ذكية',
      isActive: true,
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      description: 'تجربة الذكاء الاصطناعي الكاملة مع قلم S-Pen وشاشة مذهلة سطوع 2600 شمعة.',
      price: 1299,
      stock: 10,
      category: 'هواتف ذكية',
      isActive: true,
    },
    {
      name: 'Google Pixel 8 Pro',
      description: 'أفضل كاميرا في هاتف ذكي مع ميزات تعديل الصور السحرية من جوجل.',
      price: 999,
      stock: 8,
      category: 'هواتف ذكية',
      isActive: true,
    },
    {
      name: 'Xiaomi 14 Ultra',
      description: 'عملاق التصوير بالتعاون مع Leica وحساس 1 بوصة لإضاءة مذهلة.',
      price: 1099,
      stock: 5,
      category: 'هواتف ذكية',
      isActive: true,
    },
    {
      name: 'Nothing Phone (2)',
      description: 'تصميم فريد بواجهة Glyph الشفافة وأداء سلس بنظام Nothing OS.',
      price: 599,
      stock: 20,
      category: 'هواتف ذكية',
      isActive: true,
    }
  ];
};