import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Status } from "@prisma/client";

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

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    required: false
  })
  status?: Status
  @ApiProperty({
    required: false
  })
  done_at?: string
 }

export class GetTasksByProject {
  @ApiProperty({ required: false })
  projectId?: number;
}

export class GetTasksForStaff {
  @ApiProperty({
    required: false
  })
  staff_id?: number
  @ApiProperty({
    required: false,
    enum: Status
  })
  status?: Status
}