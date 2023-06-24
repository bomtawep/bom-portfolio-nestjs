import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from 'src/portfolio/entities/portfolio.entity';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioService } from './services/portfolio.service';

@Module({
    imports: [TypeOrmModule.forFeature([Portfolio])],
    controllers: [PortfolioController],
    providers: [PortfolioService],
    exports: [PortfolioService],
  })
  export class PortfolioModule {}