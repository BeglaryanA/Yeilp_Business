import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessEntity } from './business/entities/business.entity';
import { LoginBuisnesDto } from './business/dto/businesDtos/login-business.dto';
import { CreateBusinessDto } from './business/dto/businesDtos/create-business.dto';
import { mapCreateBusinessDtoToEntity } from './business/dto/mapper/busines.mapper';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(BusinessEntity) private businessRegistrationRepository: Repository<BusinessEntity>) { }

  async RegisterBusinesAsync(busines: CreateBusinessDto) {
    const business = mapCreateBusinessDtoToEntity(busines);
    try {
      this.businessRegistrationRepository.save(business);
      return `JWET TOKEN WITH ID${business.id}`;
    }
    catch (err) {
      console.log(err);
    }
  }

  async LoginAsync(buisnes: LoginBuisnesDto) {
    const query = await this.businessRegistrationRepository.createQueryBuilder('b')
      .where(`b.name = ${buisnes.name} and b.password = ${buisnes.password}`)
      .getOne();
    /// GENERATE JWET TOKEN TO SEND TO FRONT
  }
}
