import { ShopEntity } from '@shops/entities/shop.entity';

export class SellerEntity {

  id :          number;        
  user_id:      number;
  email:        string;  
  nationalCode: string | null; 
  instagram: string | null;
  bankAccount: string | null;
  address: string | null;
  shops:      ShopEntity[];
  createdAt:  Date;
  updatedAt:  Date;
  deletedAt:  Date | null;


  constructor (partial: Partial<SellerEntity>){

    Object.assign(this,partial)

  }

}
