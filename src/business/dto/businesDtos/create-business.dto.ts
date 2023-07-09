import { CreateAddressDto } from "./create-address.dto";
import { CreateContactDto } from "./create-contact.dto";

export class CreateBusinessDto {
    id : string;
    name: string;
    category: string;
    description: string;
    feedback : string;
    opening: Date;
    closing: Date;
    rate: number;
    address: CreateAddressDto;
    contact: CreateContactDto;
}  

export { CreateAddressDto, CreateContactDto };
