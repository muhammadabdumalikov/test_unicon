import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserController } from './user.controller';
import { UserRepo } from './user.repo';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepo]
})
export class UserModule {}
