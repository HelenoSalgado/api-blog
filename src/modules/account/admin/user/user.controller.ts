import { 
  Controller, 
  Body, 
  Param, 
  Put,
  Get, 
} from '@nestjs/common';
import { AdminUserService } from './user.service';
import { msg } from 'src/constants/msgUser';
import { UpdateUserDto } from './user.dto';

@Controller('account/users')
export class AdminUserController {

  constructor(private readonly usersService: AdminUserService) {}

  @Get(':id')
  async findOne(@Param('id') id: number){
    return await this.usersService.findOne(id);
  }

  @Get()
  async findAll(){
    return await this.usersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUser: UpdateUserDto){
    return await this.usersService.update(id, updateUser);
  }

}
