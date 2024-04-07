import { 
  Controller, 
  Get, 
  Param, 
  NotFoundException
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('plan')

export class PlanController {

  constructor(private readonly planService: PlanService) {}

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const plan = await this.planService.findOne(id);
    if(!plan) throw new NotFoundException("Não existe nenhum plano");
    return plan;
  }

  @Public()
  @Get()
  async findAll(){
    const plan = await this.planService.findAll();
    if(!plan.length) throw new NotFoundException('Não foi encontrado nenhum plano');
    return plan;
  }

}
