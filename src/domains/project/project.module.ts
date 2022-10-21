import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { ProjectController } from './project.controller';
import { ProjectRepo } from './project.repo';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, ProjectRepo]
})
export class ProjectModule {}
