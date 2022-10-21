import { Injectable } from '@nestjs/common';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '../organization/organization.dtos';
import { ProjectRepo } from './project.repo';

@Injectable()
export class ProjectService {
  constructor(private readonly repo: ProjectRepo) {}

  async createProject(project: CreateProjectDto): Promise<any> {
    return this.repo.createProject(project);
  }

  async getAllProjects(): Promise<any> {
    return this.repo.getAllProjects();
  }

  async updateProject(
    projectId: number,
    project: UpdateProjectDto,
  ): Promise<any> {
    return this.repo.updateProject(projectId, project);
  }

  async deleteProject(projectId: number): Promise<any> {
    return this.repo.deleteProject(projectId);
  }
}
