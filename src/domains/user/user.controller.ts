import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AttachStaffDto } from '../organization/organization.dtos';
import { CreateAdmin, CreateUserDto } from './user.dtos';
import { UserService } from './user.service';
import { CreateSwagger } from './user.swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @CreateSwagger()
  @Post('/admin')
  async createAdmin(@Body() user: CreateAdmin): Promise<any> {
    return this.userService.createAdmin(user);
  }

  @Post('/admin/user')
  async createUser(@Body() user: CreateUserDto): Promise<any> {
    return this.userService.createUser(user);
  }

  @Get()
  async getAllUsers(): Promise<any> {
    return this.userService.getAllUsers()
  }
}
