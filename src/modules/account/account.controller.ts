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
import { AccountService } from './account.service';
import { msg } from 'src/constants/msgUser';
import { CreateAccountDto, UpdateAccountDto } from './account.dto';

@Controller('account')
export class AccountController {

  constructor(private readonly usersService: AccountService) {}

  @Post()
  async create(@Body() createAccount: CreateAccountDto) {
    return await this.usersService.create(createAccount);
  }

  @Get()
  async findAll(){
    const users = await this.usersService.findAll();
    if(!users.length) throw new NotFoundException(msg.usersNotExist);
    return users;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    if(!user) throw new NotFoundException(msg.userNotExist);
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAccount: UpdateAccountDto){
    await this.usersService.update(id, updateAccount);
    return { message: msg.userUpdatedSucess, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.usersService.remove(id);
    return { message: msg.userDeletedSucess, statusCode: 200 };
  }
}
