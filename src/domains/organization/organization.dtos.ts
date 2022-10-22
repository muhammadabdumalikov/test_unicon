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
  @ApiProperty()
  created_by: number;
}
