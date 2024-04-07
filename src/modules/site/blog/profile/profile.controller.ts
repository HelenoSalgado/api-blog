import { 
  Controller, 
  Body,
  Param,
  Get,
  Put,
  NotFoundException, 
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './profile.tdo';
import { msg } from 'src/constants/msgProfile';
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  @Public()
  @Get(':id')
  async get(@Param('id') id: number) {
    const profile = await this.profileService.findOne(id);
    if(!profile) throw new NotFoundException('Usuário não existe');
    return profile;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProfile: UpdateProfileDto){
   await this.profileService.update(id, updateProfile);
   return { message: msg.profileUpdateSucess, statusCode: 200 };
  }
}
