import { IsString } from 'class-validator';
import { ProductEntity } from '@products/entities/product.entity';


export class CreateShopDto{

  name: string;
  address: string;
  seller_id: number;
  products?: ProductEntity[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

}