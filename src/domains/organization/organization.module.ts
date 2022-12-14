import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserRepo } from '../user/user.repo';
import { OrganizationController } from './organization.controller';
import { OrganizationRepo } from './organization.repo';
import { OrganizationService } from './organization.service';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService, PrismaService, OrganizationRepo, UserRepo]
})
export class OrganizationModule {}
