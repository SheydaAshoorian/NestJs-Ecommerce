import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from "@prisma/prisma.service";


@Injectable()
export abstract class BaseService<T , CreateDto, UpdateDto>{

    constructor(
        protected readonly prisma: PrismaService,
        protected readonly modelName: string,
    ) {}

    
    async create( dto:CreateDto): Promise<T> {
        try {

            return await this.prisma[this.modelName].create({
                data:dto,
            })
            
        } catch (error) {

            throw new BadRequestException('خطا در ایجاد رکورد در ${this.modelName')
            
        }

    }



}