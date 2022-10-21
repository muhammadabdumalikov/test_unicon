import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateOrganizationDto,
  GetTasksByProject,
  UpdateOrganizationDto,
} from './organization.dtos';
import {
  AttachStaffDto,
  CreateProjectDto,
  CreateTaskDto,
} from './organization.dtos';
import { OrganizationService } from './organization.service';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @Get()
  async getAllOrganizations(): Promise<any> {
    return this.service.getAllOrganizations();
  }

  @Post('/admin')
  async createOrganization(
    @Body() organization: CreateOrganizationDto,
  ): Promise<any> {
    return this.service.createOrganization(organization);
  }

  @Post('/admin/attach-staff')
  async attachStaffOrganization(@Body() data: AttachStaffDto): Promise<any> {
    return this.service.attachStaffOrganization(data);
  }

  @Patch('/admin/:id')
  async updateOrganization(
    @Param('id') organizationId: number,
    @Body() organization: UpdateOrganizationDto,
  ): Promise<any> {
    return this.service.updateOrganization(organizationId, organization);
  }

  @Delete('/admin/:id')
  async deleteOrganization(@Param('id') organizationId: number): Promise<any> {
    return this.service.deleteOrganization(organizationId);
  }
}
