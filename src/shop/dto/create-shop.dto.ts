import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductEntity } from '@products/entities/product.entity';

export class CreateShopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  seller_id: number;

}
