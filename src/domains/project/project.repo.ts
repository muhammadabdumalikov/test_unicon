import { Injectable } from '@nestjs/common';
import { Organization, OrganizationUsers } from '@prisma/client';
import { PrismaService } from 'prisma.service';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '../organization/organization.dtos';

@Injectable()
export class ProjectRepo {
  constructor(private readonly prisma: PrismaService) {}

  async createProject(project: CreateProjectDto): Promise<any> {
    const { created_by, organizationId } = project;
    return this.prisma.project.create({
      data: {
        org_id: organizationId,
        created_by,
      },
    });
  }

  async getAllProjects(): Promise<any> {
    return this.prisma.project.findMany();
  }

  async getOneProject(projectId: number): Promise<any> {
    return this.prisma.project.findUnique({
      where: {
        id: projectId
      }
    });
  }


  async updateProject(
    projectId: number,
    project: UpdateProjectDto,
  ): Promise<any> {
    return this.prisma.project.update({
      where: {
        id: projectId,
      },
      data: project,
    });
  }

  async deleteProject(projectId: number): Promise<any> {
    return this.prisma.project.delete({
      where: {
        id: projectId,
      },
    });
  }

  async checkForAccess(
    organizationId: number,
    userId: number,
  ): Promise<OrganizationUsers[]> {
    return this.prisma.organizationUsers.findMany({
      where: {
        user_id: userId,
        org_id: organizationId,
      },
    });
  }
}
