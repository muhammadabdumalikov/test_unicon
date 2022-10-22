import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";

export class CreateAdmin {
  @ApiProperty()
  name: string;
}

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  role: Role;
  @ApiProperty()
  created_by: number;
}