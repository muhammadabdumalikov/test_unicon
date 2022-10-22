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
  CreateTaskDto,
  GetTasksByProject,
  GetTasksForStaff,
} from './task.dtos';
import { TaskService } from './task.service';

ApiTags('Task');
@Controller('tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async getTasksForStaff(@Query() query: GetTasksForStaff) {
    return this.service.getTasksForStaff(query);
  }

  @Post()
  async createTask(@Body() task: CreateTaskDto): Promise<any> {
    return this.service.createTask(task);
  }

  @Patch('/:taskId')
  async updateTask(
    @Param('taskId') taskId: number,
    @Body() task: CreateTaskDto,
  ): Promise<any> {
    return this.service.updateTask(taskId, task);
  }

  @Post('/accomplish/:taskId')
  async accomplishTask(@Param('taskId') taskId: number): Promise<any> {
    return this.service.accomplishTask(taskId);
  }

  @Get('/:projectId')
  async getTaskByProject(@Query() query: GetTasksByProject) {
    return this.service.getTasksByProject(query);
  }

  @Delete('/:id/chief')
  async deleteTask(@Param('id') taskId: number): Promise<any> {
    return this.service.deleteTask(taskId);
  }
}
