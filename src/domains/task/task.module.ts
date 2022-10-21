import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { TaskController } from './task.controller';
import { TaskRepo } from './task.repo';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, TaskRepo]
})
export class TaskModule {}
