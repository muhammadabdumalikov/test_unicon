import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { PrismaService } from 'prisma.service';
import { AttachStaffDto } from 'src/shared/shared.dtos';
import {
  CreateOrganizationDto,
  GetTasksByProject,
  UpdateOrganizationDto,
  UpdateProjectDto,
  UpdateTaskDto,
} from './organization.dtos';
import { CreateProjectDto, CreateTaskDto } from './organization.dtos';

@Injectable()
export class OrganizationRepo {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOrganizations(): Promise<any> {
    return this.prisma.organization.findMany();
  }

  async createOrganization(data: CreateOrganizationDto) {
    const { name, created_by } = data;

    return this.prisma.organization.create({
      data
    })
  }

  async updateOrganization(
    organizationId: number,
    organization: UpdateOrganizationDto,
  ): Promise<any> {
    const record = await this.prisma.organization.update({
      where: {
        id: organizationId
      },
      data: organization
    })
  }

  async deleteOrganization(organizationId: number): Promise<any> {
    return this.prisma.organization.delete({
      where: {
        id: organizationId
      }
    })
  }

  async attachStaffOrganization(data: AttachStaffDto) {
    const { organizationId, userId } = data;
    return this.prisma.organizationUsers.create({
      data: {
        user_id: userId,
        org_id: organizationId,
      },
    });
  }
}
