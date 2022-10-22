import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { UserRepo } from '../user/user.repo';
import {
  AttachStaffDto,
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from './organization.dtos';
import { CreateProjectDto } from './organization.dtos';
import { OrganizationRepo } from './organization.repo';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly repo: OrganizationRepo,
    private readonly userRepo: UserRepo,
  ) {}

  async getAllOrganizations(): Promise<any> {
    return this.repo.getAllOrganizations();
  }

  async createOrganization(organization: CreateOrganizationDto): Promise<any> {
    const user = await this.userRepo.findOneUser(organization.created_by);
    const isAdmin = user.role === Role.ADMIN;
    if (!isAdmin) {
      throw new UnauthorizedException();
    }
    return this.repo.createOrganization(organization);
  }

  async attachStaffOrganization(data: AttachStaffDto): Promise<any> {
    const user = await this.userRepo.findOneUser(data.created_by);
    const isAdmin = user.role === Role.ADMIN;
    if (!isAdmin) {
      throw new UnauthorizedException();
    }
    return this.repo.attachStaffOrganization(data);
  }

  async updateOrganization(
    organizationId: number,
    organization: UpdateOrganizationDto,
  ): Promise<any> {
    const user = await this.userRepo.findOneUser(organization.created_by);
    const isAdmin = user.role === Role.ADMIN;
    if (!isAdmin) {
      throw new UnauthorizedException();
    }
    return this.repo.updateOrganization(organizationId, organization);
  }

  async deleteOrganization(organizationId: number): Promise<any> {
    return this.repo.deleteOrganization(organizationId);
  }
}
