import { PortfolioDto } from 'src/portfolio/dtos/portfolio.dto';
import { PortfolioService } from 'src/portfolio/services/portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getportfolios(): Promise<import("../entities/portfolio.entity").Portfolio[]>;
    findPortfoliosById(id: number): Promise<import("../entities/portfolio.entity").Portfolio>;
    createPortfolios(portfolioDto: PortfolioDto): Promise<import("../entities/portfolio.entity").Portfolio>;
}
