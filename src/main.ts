import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mementTimezone from 'moment-timezone';
import { Logger } from '@nestjs/common';
import { urlencoded, json } from 'express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');
  const apiPrefix = configService.get('API_PREFIX');
  const logger = new Logger('bootstrap');
  const config = new DocumentBuilder()
    .setTitle('bomorder')
    .setDescription('The bomorder API description')
    .setVersion('1.0')
    .addTag('bomorder')
    .addBearerAuth()
    .addServer(apiPrefix)
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .addSecurityRequirements('bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  mementTimezone.tz.setDefault('Asia/Bangkok');
  SwaggerModule.setup('api', app, document);
  try{
    await app.listen(port);
    logger.log(`Server running on ${app.getHttpServer().address().port}`)
  }catch(error){
    logger.error('Error: ', error);
  }
}
bootstrap();
