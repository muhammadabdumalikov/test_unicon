import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Role, Status } from '@prisma/client';
import { NumberConvertor } from 'src/shared/number-converter';
import { ProjectRepo } from '../project/project.repo';
import { UserRepo } from '../user/user.repo';

import {
  CreateTaskDto,
  GetTasksByProject,
  GetTasksForStaff,
  UpdateTaskDto,
} from './task.dtos';
import { TaskRepo } from './task.repo';

@Injectable()
export class TaskService {
  constructor(
    private readonly repo: TaskRepo,
    private readonly userRepo: UserRepo,
    private readonly projectRepo: ProjectRepo,
  ) {}

  async createTask(task: CreateTaskDto): Promise<any> {
    const { created_by, project_id, worker_user_id } = task;

    const creator = await this.userRepo.findOneUser(created_by);

    if (!creator) throw new NotFoundException('Chief not found');

    const project = await this.projectRepo.getOneProject(project_id);

    if (!project) throw new NotFoundException('Project not found');

    const worker = await this.userRepo.findOneUser(worker_user_id);

    if (!worker) throw new NotFoundException('Worker not found');

    return this.repo.createTask(task);
  }

  async getTasksByProject(query: GetTasksByProject) {
    const idInNumber = query.projectId ? Number(query.projectId) : undefined;

    return this.repo.getTasksByProject({ projectId: idInNumber });
  }

  async getTasksForStaff(query: GetTasksForStaff) {
    const idAsNumber = NumberConvertor(query.staff_id);

    return this.repo.getTasksForStaff({
      staff_id: idAsNumber,
      status: query.status,
    });
  }

  async updateTask(taskId: number, data: UpdateTaskDto): Promise<any> {
    const { created_by, project_id, worker_user_id } = data;

    const task = await this.repo.getOneTask(NumberConvertor(taskId));

    if (!task) throw new NotFoundException('Task not found');

    const creator = await this.userRepo.findOneUser(created_by);

    if (!creator) throw new NotFoundException('Chief not found');

    const project = await this.projectRepo.getOneProject(project_id);

    if (!project) throw new NotFoundException('Project not found');

    const worker = await this.userRepo.findOneUser(worker_user_id);

    if (!worker) throw new NotFoundException('Worker not found');

    return this.repo.updateTask(NumberConvertor(taskId), data);
  }

  async accomplishTask(taskId: number): Promise<any> {
    const idAsNumber = NumberConvertor(taskId);

    const task = await this.repo.getOneTask(idAsNumber);
    const time = Date.now() - task.due_date.getMilliseconds();
    console.log(new Date().toISOString());

    if (time <= 0) {
      return {
        message: 'Time is up',
      };
    }

    return this.repo.updateTask(idAsNumber, {
      status: Status.DONE,
      done_at: new Date().toISOString(),
    });
  }

  async deleteTask(taskId: number): Promise<any> {
    return this.repo.deleteTask(taskId);
  }
}
