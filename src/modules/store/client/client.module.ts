import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ClientService } from './client.service';
import { ClientRepository } from './client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
  imports: [PrismaModule],
})
export class ClientModule {}
