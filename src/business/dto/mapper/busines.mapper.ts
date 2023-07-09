import { AddressEntity } from 'src/business/entities/address.entity';
import { ContactEntity } from 'src/business/entities/contact.entity';
import { BusinessEntity } from 'src/business/entities/business.entity';
import { RegisterBusinesDto } from '../businesDtos/create-register-business.dto';
import { BusinesRegisterEntity } from 'src/business/entities/register.business.entity';
import { CreateBusinessDto, CreateAddressDto, CreateContactDto } from '../businesDtos/create-business.dto';

export function mapCreateBusinessDtoToEntity(createBusinessDto: CreateBusinessDto): BusinessEntity {
    const business = new BusinessEntity();
    business.name = createBusinessDto.name;
    business.category = createBusinessDto.category;
    business.description = createBusinessDto.description;
    business.opening = createBusinessDto.opening;
    business.feedback = createBusinessDto.feedback;
    business.closing = createBusinessDto.closing;
    business.rate = createBusinessDto.rate;

    const address = new AddressEntity();
    address.street = createBusinessDto.address.street;
    address.city = createBusinessDto.address.city;
    address.state = createBusinessDto.address.state;
    address.postalCode = createBusinessDto.address.postalCode;
    business.address = address;

    const contact = new ContactEntity();
    contact.phone = createBusinessDto.contact.phone;
    contact.email = createBusinessDto.contact.email;
    contact.URL = createBusinessDto.contact.URL;
    contact.socialMedia = createBusinessDto.contact.socialMedia;
    business.contact = contact;

    return business;
}

export function mapRegisterDtoToEntity(registerBusinessDto : RegisterBusinesDto) : BusinesRegisterEntity {
    const business = new BusinesRegisterEntity();
    business.name = registerBusinessDto.name;
    business.password = registerBusinessDto.password;
    return business;
}