import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';
import { PortfolioDto } from 'src/portfolio/dtos/portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>,
  ) {}

  createPortfolios(portfolioDto: PortfolioDto) {
    const newPortfolio = this.portfolioRepository.create(portfolioDto);
    return this.portfolioRepository.save(newPortfolio);
  }

  getPortfolios() {
    return this.portfolioRepository.find();
  }

  findPortfoliosById(id: any) {
    return this.portfolioRepository.findOne(id);
  }
}