import { IsInt, IsOptional,Min ,Max } from 'class-validator';
import { Type }  from 'class-transformer';

export class PaginationDto{

    @IsInt()
    @IsOptional()
    @Type(()=>Number) // تبدیل استرینگ URL به عدد
    @Min(1,{message:'صفحه باید حداقل ۱ باشد'})
    page: number=1 ;


    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1, { message: 'تعداد آیتم‌ها در هر صفحه حداقل باید ۱ باشد' })
    @Max(100, { message: 'در هر درخواست نمی‌توان بیش از ۱۰۰ آیتم گرفت' })
    limit: Number=100
}