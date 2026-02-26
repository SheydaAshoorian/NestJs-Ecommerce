import { Category } from '@prisma/client';
import { ProductEntity } from '@products/entities/product.entity';

export class CategoryEntity implements Category {
  id: number;
  name: string;
  products?: ProductEntity[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
  }
}
