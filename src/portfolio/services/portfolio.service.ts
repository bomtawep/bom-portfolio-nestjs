import { Injectable, HttpStatus } from '@nestjs/common';
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

  async getPortfolios() {
    try{
      const response = await this.portfolioRepository.find();
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
        data: response,
      }
    } catch (error) {
      console.log(error);
    }
  }
  createPortfolios(portfolioDto: PortfolioDto) {
    try {
      const newPortfolio = this.portfolioRepository.create(portfolioDto);
      this.portfolioRepository.save(newPortfolio);
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
      }
    } catch (error) {
      console.log(error);
    }
  }
  async findPortfoliosById(id: number){
    try {
      const response = await this.portfolioRepository.findOne({ where: { id: id } });
      if(!response){
        return{
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Not Found',
        }
      }
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
        data: response,
      }
    } catch (error) {
      console.log(error);
    }
  }
  updatePortfolios(
    id: number,
    portfolioDto: PortfolioDto
  ) {
    try {
      this.portfolioRepository.update(id, portfolioDto);
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
      }
    } catch (error) {
      console.log(error);
    }
  }
}