import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';
import { PortfolioDto } from 'src/portfolio/dtos/portfolio.dto';
export declare class PortfolioService {
    private readonly portfolioRepository;
    constructor(portfolioRepository: Repository<Portfolio>);
    createPortfolios(portfolioDto: PortfolioDto): Promise<Portfolio>;
    getPortfolios(): Promise<Portfolio[]>;
    findPortfoliosById(id: any): Promise<Portfolio>;
}
