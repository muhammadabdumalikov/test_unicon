import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { OrganizationController } from './organization.controller';
import { OrganizationRepo } from './organization.repo';
import { OrganizationService } from './organization.service';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService, PrismaService, OrganizationRepo]
})
export class OrganizationModule {}
