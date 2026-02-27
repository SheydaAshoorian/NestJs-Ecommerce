import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@users/dto/create-user.dto';
import { ConflictException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: CreateUserDto) {
    const existUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existUser) throw new ConflictException('این ایمیل قبلاً ثبت شده است');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(dto.password, salt);

    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
        role: [Role.CUSTOMER],
      },
    });
  }
}
