import { Seller } from '@prisma/client';
import { ShopEntity } from '@shops/entities/shop.entity';
import { ProductEntity } from '@products/entities/product.entity';

export class SellerEntity implements Seller {

  id : number;        
  first_name: string;
  last_name:  string;
  email:      string;  
  phone:      string;  
  shops:      ShopEntity[];
  createdAt:  Date;
  updatedAt:  Date;
  deletedAt:  Date | null;


  constructor (partial: Partial<SellerEntity>){

    Object.assign(this,partial)

  }

}
