import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CreateAdmin, CreateUserDto } from './user.dtos';
import { UserRepo } from './user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async createAdmin(user: CreateAdmin): Promise<any> {
    return this.userRepo.createUser({
      name: user.name,
      role: Role.ADMIN,
      created_by: null,
    });
  }

  async createUser(data: CreateUserDto): Promise<any> {
    const user = await this.userRepo.findOneUser(data.created_by)
    const isAdmin = user.role === Role.ADMIN
    if (!isAdmin) {
      throw new UnauthorizedException();
    }
    
    return this.userRepo.createUser(data);
  }

  async getAllUsers(): Promise<any> {
    return this.userRepo.getAllUsers();
  }
}
