import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { DbConfigs } from './business/db/db.config';
import { BusinessModule } from './business/business.module';
import { BusinessService } from './business/business.service';
import { AddressEntity } from './business/entities/address.entity';
import { ContactEntity } from './business/entities/contact.entity';
import { BusinessEntity } from './business/entities/business.entity';
import { BusinesRegisterEntity } from './business/entities/register.business.entity';

@Module({
  imports: [
    BusinessModule,
    TypeOrmModule.forRootAsync({ useClass: DbConfigs }),
    TypeOrmModule.forFeature([ContactEntity, BusinesRegisterEntity, AddressEntity, BusinessEntity]),
  ],
  exports : [BusinessModule],
  controllers: [AuthController],
  providers: [AuthService, BusinessService]
})
export class AuthModule {}
