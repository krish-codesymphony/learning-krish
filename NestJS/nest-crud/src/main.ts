import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';
dotenv.config();
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(Number(process.env.APP_PORT));
}
bootstrap();
