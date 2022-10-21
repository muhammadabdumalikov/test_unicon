import { Injectable } from '@nestjs/common';
import {
  CreateTaskDto,
  GetTasksByProject,
} from '../organization/organization.dtos';
import { TaskRepo } from './task.repo';

@Injectable()
export class TaskService {
  constructor(private readonly repo: TaskRepo) {}

  async createTask(task: CreateTaskDto): Promise<any> {
    return this.repo.createTask(task);
  }

  async getTasksByProject(query: GetTasksByProject) {
    const { projectId } = query;

    return this.repo.getTasksByProject(query);
  }

  async updateTask(taskId: number, task: CreateTaskDto): Promise<any> {
    return this.repo.updateTask(taskId, task);
  }

  async deleteTask(taskId: number): Promise<any> {
    return this.repo.deleteTask(taskId);
  }
}
