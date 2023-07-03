import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  Patch,
  //UseGuards,
} from '@nestjs/common';
import { PersonalDataDto } from 'src/portfolio/dtos/personalData.dto';
import { PortfolioService } from 'src/portfolio/services/portfolio.service';
//import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) { }

  //@UseGuards(AuthGuard)
  @Get('/')
  getPortfolios() {
    return this.portfolioService.getPortfolios();
  }
  //@UseGuards(AuthGuard)
  @Get('/:id')
  findPortfoliosById(@Param('id', ParseIntPipe) id: number) {
    return this.portfolioService.findPortfoliosById(id);
  }
  //@UseGuards(AuthGuard)
  @Post('/')
  @UsePipes(ValidationPipe)
  createPortfolios(@Body() personalDataDto: PersonalDataDto) {
    return this.portfolioService.createPortfolios(personalDataDto);
  }
  //@UseGuards(AuthGuard)
  @Patch('/:id')
  updatePortfolios(
    @Param('id', ParseIntPipe) id: number,
    @Body() personalDataDto: PersonalDataDto,
  ) {
    return this.portfolioService.updatePortfolios(id, personalDataDto);
  }
}
