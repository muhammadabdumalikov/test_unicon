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
  GetTasksByProject,
  CreateTaskDto,
} from '../organization/organization.dtos';
import { TaskService } from './task.service';

ApiTags('Task');
@Controller('tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get('/chief')
  async getTaskByProject(@Query() query: GetTasksByProject) {
    return this.service.getTasksByProject(query);
  }

  @Post('/chief')
  async createTask(@Body() task: CreateTaskDto): Promise<any> {
    return this.service.createTask(task);
  }

  @Patch('/chief')
  async updateTask(
    @Param() taskId: number,
    @Body() task: CreateTaskDto,
  ): Promise<any> {
    return this.service.updateTask(taskId, task);
  }

  @Delete('/:id/chief')
  async deleteTask(@Param('id') taskId: number): Promise<any> {
    return this.service.deleteTask(taskId);
  }
}
