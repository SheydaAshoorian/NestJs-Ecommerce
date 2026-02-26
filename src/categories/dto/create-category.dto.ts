import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({ message: 'نام دسته‌بندی نمی‌تواند خالی باشد' })
  @MinLength(3, { message: 'نام دسته‌بندی باید حداقل ۳ کاراکتر باشد' })
  name: string;
}
