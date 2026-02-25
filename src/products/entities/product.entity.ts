import { Product } from '@prisma/client'; 


export class ProductEntity implements Product {
  id: number;
  name: string;
  description: string;
  price: number;
  shop_id: number;
  category_id: number;
  seller_id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial);
  }
}
