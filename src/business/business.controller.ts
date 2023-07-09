import { endpoints } from './constants/endpoints';
import { BusinessService } from './business.service';
import { UpdateBusinessDto } from './dto/businesDtos/update-business.dto';
import { CreateBusinessDto } from './dto/businesDtos/create-business.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post(endpoints.INFO)
  create(@Body() createBusinessDto: CreateBusinessDto) {
    this.businessService.setInformation(createBusinessDto);
  }

  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessDto: UpdateBusinessDto) {
    return this.businessService.update(+id, updateBusinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
