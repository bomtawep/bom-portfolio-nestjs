import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './portfolio/entities';
import { AppService } from './app.service'
import { AppController } from './app.controller';
import { PortfolioModule } from './portfolio/portfolio.module';
import appConfig from './config/configuration';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [...entities],
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    PortfolioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
