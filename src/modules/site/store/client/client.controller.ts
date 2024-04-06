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
import { ClientService } from './client.service';
import { CreateClientDto, UpdateClientDto } from './client.dto';

// O id da conta (accountId) deste client deve ser obtido do token de autenticação
let accountId: number = 1;

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClient: CreateClientDto) {
    return await this.clientService.create(createClient);
  }

  @Get()
  async findOne(@Param(':id') id: number) {
    const client = await this.clientService.findOne(id, accountId);
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
