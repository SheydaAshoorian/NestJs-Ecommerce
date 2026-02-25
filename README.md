# 🚀 Sales & Products Management System

[![NestJS](https://img.shields.io/badge/framework-NestJS-E0234E?style=flat&logo=nestjs)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)
[![Redis](https://img.shields.io/badge/cache-Redis-DC382D?style=flat&logo=redis)](https://redis.io/)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

این پروژه یک سیستم مدیریت فروش و محصولات (Backend) است که با تمرکز بر **قابلیت استفاده مجدد (Reusability)** و **معماری ماژولار** طراحی شده است.

---

## 🛠 استراتژی‌های فنی و معماری (Architecture)

در توسعه این سیستم، استراتژی‌های زیر برای تضمین کیفیت و سرعت توسعه پیاده‌سازی شده‌اند:

### ۱. معماری سرویس پایه (Base Service Pattern)
برای رعایت اصل **DRY** و جلوگیری از تکرار کد، یک سرویس انتزاعی (Abstract) طراحی شده است:
* **Generics:** استفاده از `<T, CreateDto, UpdateDto>` برای مدیریت هر نوع مدل دیتابیس.
* **Dynamic Repository:** شناسایی خودکار جداول دیتابیس در زمان اجرا.

### ۲. لایه دسترسی به داده (Data Access)
* **Prisma ORM:** استفاده از سیستم Type-safe برای تعامل با PostgreSQL.
* **Entities:** تبدیل خودکار دیتای خام به اشیاء هوشمند با استفاده از `Class Transformer`.

### ۳. بهینه‌سازی و کشینگ (Caching)
* **Redis Integration:** پیاده‌سازی لایه کشینگ سراسری در `BaseService` برای کاهش بار دیتابیس در کوئری‌های پرتکرار (مثل لیست محصولات).

### ۴. اعتبار‌سنجی (Validation)
* استفاده از **DTOs** و **Class-Validator** برای اطمینان از صحت داده‌های ورودی در تمام لایه‌ها.

---

## 📖 مستندات API (Swagger)

این پروژه از **Swagger** برای مستندسازی خودکار APIها استفاده می‌کند. پس از اجرای پروژه، می‌توانید به تمام Endpoints، مدل‌های ورودی (DTOs) و پاسخ‌ها به صورت تعاملی دسترسی داشته باشید.

* **آدرس دسترسی:** `http://localhost:3000/api/docs`
* **ویژگی‌ها:** تست مستقیم APIها، مشاهده Schema مدل‌ها و وضعیت‌های خطا.
---
## 🐳 اجرای سریع با Docker

برای سهولت در راه‌اندازی زیرساخت‌ها (Database & Redis)، فایل `docker-compose.yml` آماده شده است.

### مراحل اجرا:
1. اجرای کانتینرها در حالت Background:
   ```bash
   docker-compose up -d

---

## 🏗 ساختار پروژه (Folder Structure)

```text
src/
├── common/             # کدهای مشترک و پایه (BaseService)
├── prisma/             # سرویس و تنظیمات Prisma
├── products/           # ماژول مدیریت محصولات
├── categories/         # ماژول مدیریت دسته‌بندی‌ها
└── main.ts             # نقطه شروع اپلیکیشن