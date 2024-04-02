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
import { msg } from 'src/constants/msgUser';
import { CreateClientDto, UpdateClientDto } from './client.dto';

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createUser: CreateClientDto) {
   await this.clientService.create(createUser);
   return { message: msg.userCreatedSucess, statusCode: 200 };
  }

  @Get()
  async findAll(){
    const clients = await this.clientService.findAll();
    if(!clients.length) throw new NotFoundException(msg.usersNotExist);
    return clients;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const client = await this.clientService.findOne(id);
    if(!client) throw new NotFoundException(msg.userNotExist);
    return client;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateClient: UpdateClientDto){
    await this.clientService.update(id, updateClient);
    return { message: msg.userUpdatedSucess, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.clientService.remove(id);
    return { message: msg.userDeletedSucess, statusCode: 200 };
  }
}
