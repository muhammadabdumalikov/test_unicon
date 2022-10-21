import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import {
  CreateTaskDto,
  GetTasksByProject,
  UpdateTaskDto,
} from '../organization/organization.dtos';

@Injectable()
export class TaskRepo {
  constructor(private readonly prisma: PrismaService) { }


  async createTask(task: CreateTaskDto): Promise<any> {
    const { created_by, due_date, project_id, worker_user_id } = task;

    return this.prisma.task.create({
      data: {
        project_id,
        worker_id: worker_user_id,
        due_date,
        created_by
      }
    })
  }

  async getTasksByProject(query: GetTasksByProject): Promise<any> {
    const { projectId } = query;
    return this.prisma.task.findMany({
      where: {
        project_id: Number(projectId)
      }
    })
  }

  async updateTask(taskId: number, task: UpdateTaskDto): Promise<any> {
    return this.prisma.task.update({
      where: {
        id: taskId
      },
      data: task
    })
  }

  async deleteTask(taskId: number): Promise<any> {
    return this.prisma.task.delete({
      where: {
        id: taskId
      }
    })
  }
}
