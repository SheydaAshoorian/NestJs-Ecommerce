import { SellerEntity } from '@sellers/entities/seller.entity';
import { User } from '@prisma/client';

export enum Role {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export class UserEntity {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: Role[];
    seller?: SellerEntity;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
