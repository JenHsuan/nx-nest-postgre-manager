/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule);
  //const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  app.set('view engine', 'html');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.engine('html', require('ejs').renderFile);

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();
