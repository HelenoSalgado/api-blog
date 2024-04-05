import { Injectable } from '@nestjs/common';
import type { SetGroupDto } from './group.dto';
import { GroupRepository } from './group.repository';

@Injectable()
export class GroupService {

  constructor(private repository: GroupRepository) {}

  async findAll(){
    return await this.repository.findAll();
  }

  async findOne(id: number){
    return await this.repository.findOne(Number(id));
  }

  async update(id: number, setInGroup: SetGroupDto){
    return await this.repository.update(Number(id), setInGroup);
  }

}