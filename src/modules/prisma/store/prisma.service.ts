import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-store/prisma/client';

@Injectable()
export class PrismaStoreService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    //await this.$connect();
  }

  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit' as never, async () => {
  //     await app.close();
  //   });
  // }
}