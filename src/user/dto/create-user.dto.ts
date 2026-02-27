import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Matches,
  IsEnum,
  MinLength
} from 'class-validator';
import { Exclude } from 'class-transformer';
import { Role } from '@prisma/client';

export class CreateUserDto {
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

  @IsString()
  @MinLength(8, { message: 'پسورد نباید کمتر از ۸ کاراکتر باشد' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'پسورد باید شامل حروف بزرگ، کوچک و اعداد باشد',
  })
  password: string;

  @IsEnum(Role, { each: true }) // این 'each: true' یعنی برو تک تک اعضای آرایه رو چک کن
  role: Role[];
}
