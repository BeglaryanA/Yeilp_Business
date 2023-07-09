import { Injectable } from "@nestjs/common";
import { AddressEntity } from "../entities/address.entity";
import { ContactEntity } from "../entities/contact.entity";
import { BusinessEntity } from "../entities/business.entity";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class DbConfigs implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> {
        return (
            {
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'passWORD8',
                database: 'buisness',
                entities: [BusinessEntity, AddressEntity, ContactEntity],
                synchronize: true, // Use with caution in production!
            }
        );
    }

}