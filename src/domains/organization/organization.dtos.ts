import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  created_by: number;
}

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}

export class CreateProjectDto {
  @ApiProperty()
  organizationId: number;
  @ApiProperty()
  created_by: number;
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

export class AttachStaffDto {
  @ApiProperty()
  organizationId: number;
  @ApiProperty()
  userId: number;
}

export class CreateTaskDto {
  @ApiProperty()
  created_by: number;
  @ApiProperty()
  project_id: number;
  @ApiProperty()
  due_date: Date;
  @ApiProperty()
  worker_user_id: number;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class GetTasksByProject {
  @ApiProperty({ required: false })
  projectId?: string;
}
