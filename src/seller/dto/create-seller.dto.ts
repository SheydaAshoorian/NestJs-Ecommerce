import { IsString, IsEmail, IsNotEmpty, Matches } from 'class-validator';

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
  @IsNotEmpty({ message: 'شماره موبایل اجباری است' })
  @Matches(/^09\d{9}$/, {
    message:
      'شماره موبایل باید با 09 شروع شده و ۱۱ رقم باشد (مثال: 09123456789)',
  })
  phone: string;
}
