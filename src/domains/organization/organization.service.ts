import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import {
  AttachStaffDto,
  CreateOrganizationDto,
  GetTasksByProject,
  UpdateOrganizationDto,
  UpdateProjectDto,
} from './organization.dtos';
import { CreateProjectDto, CreateTaskDto } from './organization.dtos';
import { OrganizationRepo } from './organization.repo';

@Injectable()
export class OrganizationService {
  constructor(private readonly repo: OrganizationRepo) {}

  async getAllOrganizations(): Promise<any> {
    return this.repo.getAllOrganizations();
  }

  async createOrganization(organization: CreateOrganizationDto): Promise<any> {
    return this.repo.createOrganization(organization);
  }

  async attachStaffOrganization(data: AttachStaffDto): Promise<any> {
    return this.repo.attachStaffOrganization(data);
  }

  async updateOrganization(
    organizationId: number,
    organization: UpdateOrganizationDto,
  ): Promise<any> {
    return this.repo.updateOrganization(organizationId, organization);
  }

  async deleteOrganization(organizationId: number): Promise<any> {
    return this.repo.deleteOrganization(organizationId);
  }
}
