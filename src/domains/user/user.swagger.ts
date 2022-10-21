import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { IUser } from 'src/interfaces/user/IUser';

export function CreateSwagger() {
  return applyDecorators(ApiCreatedResponse({ type: IUser }));
}
