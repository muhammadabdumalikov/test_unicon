import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { ProjectRepo } from '../project/project.repo';
import { UserRepo } from '../user/user.repo';
import { TaskController } from './task.controller';
import { TaskRepo } from './task.repo';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, UserRepo, ProjectRepo, TaskRepo]
})
export class TaskModule {}
