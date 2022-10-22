import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'prisma.service';
import {
  CreateTaskDto,
  GetTasksByProject,
  UpdateTaskDto,
  GetTasksForStaff,
} from './task.dtos';

@Injectable()
export class TaskRepo {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(task: CreateTaskDto): Promise<Task> {
    const { created_by, due_date, project_id, worker_user_id } = task;

    return this.prisma.task.create({
      data: {
        project_id,
        worker_id: worker_user_id,
        due_date,
        created_by,
      },
    });
  }

  async getOneTask(taskId: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
  }

  async getTasksByProject(query: GetTasksByProject): Promise<Task[]> {
    const { projectId } = query;
    return this.prisma.task.findMany({
      where: {
        project_id: projectId,
      },
    });
  }

  async getTasksForStaff(query: GetTasksForStaff): Promise<Task[]> {
    const { staff_id, status } = query;
    return this.prisma.task.findMany({
      where: {
        status,
        worker_id: staff_id,
      },
    });
  }

  async updateTask(taskId: number, data: UpdateTaskDto): Promise<Task> {
    const { created_by, due_date, project_id, worker_user_id } = data;
    return this.prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        created_by,
        due_date,
        project_id,
        worker_id: worker_user_id,
      },
    });
  }

  async deleteTask(taskId: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
