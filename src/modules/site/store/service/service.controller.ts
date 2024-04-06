import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete,
  Put, 
  NotFoundException
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto, UpdateServiceDto } from './service.dto';

@Controller('service')
export class ServiceController {

  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  async create(@Body() createService: CreateServiceDto) {
    return await this.serviceService.create(createService);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const service = await this.serviceService.findOne(id);
    if(!service) throw new NotFoundException('service não encontrado');
    return service;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateservice: UpdateServiceDto){
    return await this.serviceService.update(id, updateservice);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.serviceService.remove(id);
  }
}
