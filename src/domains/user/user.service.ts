import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { AttachStaffDto } from '../organization/organization.dtos';
import { CreateAdmin, CreateUserDto } from './user.dtos';
import { UserRepo } from './user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async createAdmin(user: CreateAdmin): Promise<any> {
    return this.userRepo.createUser({
      name: user.name,
      role: Role.Admin,
      created_by: null,
    });
  }

  async createUser(user: CreateUserDto): Promise<any> {
    return this.userRepo.createUser(user);
  }

  async getAllUsers(): Promise<any> {
    return this.userRepo.getAllUsers();
  }
}
