import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionFilter, Injectable } from '@nestjs/common';
import { BusinessEntity } from './entities/business.entity';
import { CreateBusinessDto } from './dto/businesDtos/create-business.dto';
import { UpdateBusinessDto } from './dto/businesDtos/update-business.dto';
import { mapCreateBusinessDtoToEntity, mapRegisterDtoToEntity } from './dto/mapper/busines.mapper';

@Injectable()
export class BusinessService {
  constructor(@InjectRepository(BusinessEntity) private businessInfoRepository: Repository<BusinessEntity>) { }

  async setInformation(buinsesInfo: CreateBusinessDto) {
    const buisness = mapCreateBusinessDtoToEntity(buinsesInfo);
    try {
      return await this.businessInfoRepository.save(buisness);
    }
    catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all business`;
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}