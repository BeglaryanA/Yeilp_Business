import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.use(bodyParser.json());
  await app.listen(8000);
}
bootstrap();
  