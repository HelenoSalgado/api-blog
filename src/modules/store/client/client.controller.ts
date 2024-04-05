import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete,
  Put, 
  NotFoundException, 
  Query
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto, UpdateClientDto } from './client.dto';

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClient: CreateClientDto) {
    return await this.clientService.create(createClient);
  }

  @Get()
  async find( 
    @Query('accountId') accountId: number,
    @Query('clientId') clientId: number
  ) {
    const client = await this.clientService.find(accountId, clientId);
    if(!client) throw new NotFoundException('Client não encontrado');
    return client;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateClient: UpdateClientDto){
    return await this.clientService.update(id, updateClient);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.clientService.remove(id);
  }
}
