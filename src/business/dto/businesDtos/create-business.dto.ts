import { CreateAddressDto } from "./create-address.dto";
import { CreateContactDto } from "./create-contact.dto";

export class CreateBusinessDto {
    id : string;
    name: string;
    password: string;
    category: string;
    description: string;
    feedback? : string;
    opening: Date;
    closing: Date;
    address: CreateAddressDto;
    contact: CreateContactDto;
    rate?: number;
}

export { CreateAddressDto, CreateContactDto };
