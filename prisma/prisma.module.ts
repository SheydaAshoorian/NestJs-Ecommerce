import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], //  اکسپورت می کنیم  تا بقیه ببیننش
})
export class PrismaModule {}