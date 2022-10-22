import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/api-docs', app, createDocument(app));
  
  await app.listen(3000, () => console.log(`Server rady at ${3000}`));
}
bootstrap();
