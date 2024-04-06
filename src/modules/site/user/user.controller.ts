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
import { UserService } from './user.service';
import { msg } from 'src/constants/msgUser';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
export class UserController {

  constructor(private readonly usersService: UserService) {}

  // @Post()
  // async create(@Body() createUser: CreateUserDto) {
  //  return await this.usersService.create(createUser);
  // }

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
  async update(@Param('id') id: number, @Body() updateUser: UpdateUserDto){
    await this.usersService.update(id, updateUser);
    return { message: msg.userUpdatedSucess, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.usersService.remove(id);
    return { message: msg.userDeletedSucess, statusCode: 200 };
  }
}
