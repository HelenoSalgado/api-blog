import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { PrismaStoreModule } from '../../../prisma/store/prisma.module';
import { ClientService } from './client.service';
import { ClientRepository } from './client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
  imports: [PrismaStoreModule],
})
export class ClientModule {}
