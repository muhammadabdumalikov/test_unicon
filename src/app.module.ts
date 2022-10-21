import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './domains/organization/organization.module';
import { ProjectModule } from './domains/project/project.module';
import { UserModule } from './domains/user/user.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'postgres',
          password: '4324',
          database: 'unicon',
          port: 5432,
        },
      },
    }),
    UserModule,
    OrganizationModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
