import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserRepo } from '../user/user.repo';
import { ProjectController } from './project.controller';
import { ProjectRepo } from './project.repo';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, ProjectRepo, UserRepo]
})
export class ProjectModule {}
