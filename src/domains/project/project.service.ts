import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { NumberConvertor } from 'src/shared/number-converter';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from '../organization/organization.dtos';
import { UserRepo } from '../user/user.repo';
import { ProjectRepo } from './project.repo';

@Injectable()
export class ProjectService {
  constructor(
    private readonly repo: ProjectRepo,
    private readonly userRepo: UserRepo,
  ) {}

  async createProject(project: CreateProjectDto): Promise<any> {
    const { created_by, organizationId } = project;

    const user = await this.userRepo.findOneUser(created_by);

    if (!user) throw new NotFoundException('User not found');

    const { id, role } = user;

    const organizationUsers = await this.repo.checkForAccess(
      organizationId,
      id,
    );

    const isChief = organizationUsers.find(
      (orgUser) => orgUser.user_id === created_by && role === Role.CHIEF,
    );

    if (!isChief) throw new UnauthorizedException();

    return this.repo.createProject(project);
  }

  async getAllProjects(): Promise<any> {
    return this.repo.getAllProjects();
  }

  async updateProject(
    projectId: number,
    project: UpdateProjectDto,
  ): Promise<any> {
    return this.repo.updateProject(NumberConvertor(projectId), project);
  }

  async deleteProject(projectId: number): Promise<any> {
    return this.repo.deleteProject(projectId);
  }
}
