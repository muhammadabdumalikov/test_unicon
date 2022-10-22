import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { AttachStaffDto } from '../organization/organization.dtos';
import { CreateUserDto } from './user.dtos';

@Injectable()
export class UserRepo {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async findOneUser(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany()
  }
}
