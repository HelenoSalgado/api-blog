import { 
  Controller, 
  Get, 
  Body, 
  Param, 
  Put, 
  NotFoundException
} from '@nestjs/common';
import { GroupService } from './group.service';
import { SetGroupDto } from './group.dto';

@Controller('group')

export class GroupController {

  constructor(private readonly inGroupService: GroupService) {}

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const inGroup = await this.inGroupService.findOne(id);
    if(!inGroup) throw new NotFoundException("Não existem usuários em nenhum grupo");
    return inGroup;
  }

  @Get()
  async findAll(){
    const inGroup = await this.inGroupService.findAll();
    if(!inGroup.length) throw new NotFoundException('Não existe nem grupo com usuários');
    return inGroup;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() setInGroup: SetGroupDto){
    return await this.inGroupService.update(id, setInGroup);
  }

}
