import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalData } from '../entities/personalData.entity';
import { PersonalDataDto } from 'src/portfolio/dtos/personalData.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PersonalData)
    private readonly personalDataRepository: Repository<PersonalData>,
  ) {}

  async getPortfolios() {
    try{
      const response = await this.personalDataRepository.find();
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
        data: response,
      }
    } catch (error) {
      console.log(error);
    }
  }
  createPortfolios(personalDataDto: PersonalDataDto) {
    try {
      const newPersonalData = this.personalDataRepository.create(personalDataDto);
      this.personalDataRepository.save(newPersonalData);
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
      const response = await this.personalDataRepository.findOne({ where: { id: id } });
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
    personalDataDto: PersonalDataDto,
  ) {
    try {
      this.personalDataRepository.update(id, personalDataDto);
      return{
        statusCode: HttpStatus.OK,
        message: 'Success',
      }
    } catch (error) {
      console.log(error);
    }
  }
}