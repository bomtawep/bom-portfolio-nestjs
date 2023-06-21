import { Module } from '@nestjs/common';
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { entities } from './portfolio/entities';
import { AppService } from './app.service'
import { AppController } from './app.controller';
import { PortfolioModule } from './portfolio/portfolio.module';
import { Portfolio } from './portfolio/entities/portfolio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'B@13o01m22',
      database: process.env.DB_NAME || 'bomtawep',
      entities: [Portfolio],
      synchronize: true,
    }),
    PortfolioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
