import { Module } from '@nestjs/common';
import { OrganizationModule } from './domains/organization/organization.module';
import { ProjectModule } from './domains/project/project.module';
import { TaskModule } from './domains/task/task.module';
import { UserModule } from './domains/user/user.module';

@Module({
  imports: [UserModule, OrganizationModule, ProjectModule, TaskModule],
})
export class AppModule {}
