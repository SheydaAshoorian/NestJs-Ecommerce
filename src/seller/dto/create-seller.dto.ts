import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSellerDto {

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
  
}
