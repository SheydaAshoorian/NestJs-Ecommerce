import { IsString,IsNumber, IsNotEmpty,IsInt,IsOptional,IsPositive } from 'class-validator';
import { Type } from 'class-transformer';  

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description :  string;

    @IsNumber({maxDecimalPlaces:2 })
    @IsPositive()
    @Type(()=>Number) // تبدیل استرینگ به عدد
    price: number;

    @IsInt()
    @Type(()=>Number)
    shop_id: number;

    @IsInt()
    @Type(()=>Number)
    category_id: number;

    @IsInt()
    @Type(()=>Number)
    seller_id :  number;

}

