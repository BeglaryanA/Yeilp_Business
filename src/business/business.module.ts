import { Module } from '@nestjs/common';
import { DbConfigs } from './db/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { ContactEntity } from './entities/contact.entity';
import { BusinessEntity } from './entities/business.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: DbConfigs }),
    TypeOrmModule.forFeature([BusinessEntity, AddressEntity, ContactEntity]),
  ],
  exports: [BusinessModule]
})
export class BusinessModule { }
