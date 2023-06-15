import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { PortfolioDto } from 'src/portfolio/dtos/portfolio.dto';
  import { PortfolioService } from 'src/portfolio/services/portfolio.service';
  
  @Controller('portfolio')
  export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}
    @Get()
    getportfolios() {
      return this.portfolioService.getPortfolios();
    }
  
    @Get('/:id')
    findPortfoliosById(@Param('id', ParseIntPipe) id: number) {
      return this.portfolioService.findPortfoliosById(id);
    }
  
    @Post('/')
    @UsePipes(ValidationPipe)
    createPortfolios(@Body() portfolioDto: PortfolioDto) {
      return this.portfolioService.createPortfolios(portfolioDto);
    }
  }
  