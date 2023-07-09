import { Module } from '@nestjs/common';
import { DbConfigs } from './db/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessService } from './business.service';
import { AddressEntity } from './entities/address.entity';
import { ContactEntity } from './entities/contact.entity';
import { BusinessController } from './business.controller';
import { BusinessEntity } from './entities/business.entity';
import { BusinesRegisterEntity } from './entities/register.business.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: DbConfigs }),
    TypeOrmModule.forFeature([BusinessEntity, AddressEntity, ContactEntity, BusinesRegisterEntity]),
  ],
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessModule]
})
export class BusinessModule { }
