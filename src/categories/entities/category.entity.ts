import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  id: number;
  name: string;
  products?: ProductEntity[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
  }
}
