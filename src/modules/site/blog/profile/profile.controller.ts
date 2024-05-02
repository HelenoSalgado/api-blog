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
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('profiles')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  @Public()
  @Get(':slug')
  async get(@Param('slug') slug: string) {
    const profile = await this.profileService.findOne(slug);
    if(!profile) throw new NotFoundException('Perfil não existe');
    return profile;
  }

  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updateProfile: UpdateProfileDto){
   return await this.profileService.update(slug, updateProfile);
  }
}
