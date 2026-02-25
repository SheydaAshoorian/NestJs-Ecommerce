import { Shop } from '@prisma/client';

export class ShopEntity implements Shop {
  id: number;
  name: string;
  address: string;
  seller_id: number;
  products?: ProductEntity[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(partial: Partial<ShopEntity>) {
    Object.assign(this, partial);
  }
}
