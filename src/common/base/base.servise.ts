import { Injectable, NotFoundException, BadRequestException,InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from "@prisma/prisma.service";
import { PaginationDto } from '@common/dtos/pagination.dto';
import { Redis } from 'ioredis';
import { RedisService } from '@songkeys/nestjs-redis';

@Injectable()
export abstract class BaseService< T , CreateDto, UpdateDto>{
    
    protected readonly redis: Redis;
    
    constructor(
        protected readonly prisma: PrismaService,
        protected readonly modelName: string,
        protected readonly redisService: RedisService,

    ) {
        this.redis = this.redisService.getClient();
    }



    async findAll(pagination: PaginationDto ,includ?: any ){

        const { page, limit } = pagination;
        const skip = (page - 1) * +limit;

        try {
            const { data , total} = await Promise.all([
            await this.prisma[this.modelName].findMany({
                skip,
                take: limit,
                includ: includ,
                where : { deletedAt : null},
                orderBy: { createdAt: 'desc' },

            }),
            this.prisma[this.modelName].count({ where: {deletedAt : null } }),
        ])
        return{
            data,
            meta:{
                total,
                page,
               lastPage: Math.ceil(total / +limit),
          hasNextPage: page < Math.ceil(total / +limit),
            },
        };
    } catch (e) {
        throw new InternalServerErrorException('خطا در واکشی اطلاعات');
        }

    }


    async findOne(id: number, options?: { include?: any }) {
    return await this.prisma[this.modelName].findUnique({
      where: { id, deletedAt: null } as any,
      include: options?.include,
    });
  }

    async create( dto:CreateDto): Promise<T> {

        try {
            return await this.prisma[this.modelName].create({
                data:dto,
            })
            
        } catch (error) {

            throw new BadRequestException('خطا در ایجاد رکورد در ${this.modelName')
            
        }
    }

    async update(id: number, dto: UpdateDto) {
        return await this.prisma[this.modelName].update({
        where: { id },
        data: dto as any,
        });
    }

    async remove(id: number): Promise <T> {
        try {
            return await this.prisma[this.modelName].update({
            where: { id: Number(id) },
            data: { deletedAt: new Date() },
            });
        }catch (error) { // کد P2025 در پریزما یعنی: "رکورد پیدا نشد"
            if(error.code === 'P2025'){
                throw new BadRequestException(`رکورد با شناسه ${id} یافت نشد که حذف شود.`);
            }
                throw new BadRequestException(`خطا در عملیات حذف از ${this.modelName}`)
        }
    }
}