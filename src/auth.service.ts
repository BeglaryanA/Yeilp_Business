import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { mapRegisterDtoToEntity } from './business/dto/mapper/busines.mapper';
import { LoginBuisnesDto } from './business/dto/businesDtos/login-business.dto';
import { BusinesRegisterEntity } from './business/entities/register.business.entity';
import { RegisterBusinesDto } from './business/dto/businesDtos/create-register-business.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(BusinesRegisterEntity) private businessRegistrationRepository: Repository<BusinesRegisterEntity>,
    @InjectRepository(BusinesRegisterEntity) private businessInfoRepository: Repository<BusinesRegisterEntity>) { }

  async RegisterBusinesAsync(busines: RegisterBusinesDto) {
    const business = mapRegisterDtoToEntity(busines);
    try {
      return this.businessRegistrationRepository.save(business);
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
