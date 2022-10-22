import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from '../organization/organization.dtos';
import { ProjectService } from './project.service';

@ApiTags('Project')
@Controller('projects')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<any> {
    return this.service.getAllProjects();
  }

  @Post()
  async createProject(@Body() project: CreateProjectDto): Promise<any> {
    return this.service.createProject(project);
  }

  @Patch('/:id/chief')
  async updateProject(
    @Param('id') projectId: number,
    @Body() project: CreateProjectDto,
  ): Promise<any> {
    return this.service.updateProject(projectId, project);
  }

  @Delete('/:id/chief')
  async deleteProject(@Param('id') projectId: number): Promise<any> {
    return this.service.deleteProject(projectId);
  }
}
