import { Product } from '@prisma/client'; // استفاده از تایپ خودکار پریزما برای امنیت کُد

export class ProductEntity implements Product {
  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  description: string;
  price: number;
  shop_id: number;
  category_id: number;
  seller_id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date; // دقت کنید که در پریزما معمولاً فیلدهای ح
}
