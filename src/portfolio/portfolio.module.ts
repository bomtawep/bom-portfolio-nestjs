import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalData } from 'src/portfolio/entities/personalData.entity';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioService } from './services/portfolio.service';

@Module({
    imports: [TypeOrmModule.forFeature([PersonalData])],
    controllers: [PortfolioController],
    providers: [PortfolioService],
    exports: [PortfolioService],
  })
  export class PortfolioModule {}