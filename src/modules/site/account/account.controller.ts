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
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('account')
export class AccountController {

  constructor(private readonly accountService: AccountService) {}

  @Public()
  @Post()
  async create(@Body() createAccount: CreateAccountDto) {
    return await this.accountService.create(createAccount);
  }

  @Public()
  @Get()
  async findAll(){
    const account = await this.accountService.findAll();
    if(!account.length) throw new NotFoundException('Conta não existe');
    return account;
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.accountService.findOne(id);
    if(!user) throw new NotFoundException(msg.userNotExist);
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAccount: UpdateAccountDto){
    return await this.accountService.update(id, updateAccount);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.accountService.remove(id);
    throw new NotFoundException("Conta deletada com sucesso");
  }
}
