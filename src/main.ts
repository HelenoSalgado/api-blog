import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaBlogService } from './modules/prisma/blog/prisma.service';
import { PrismaStoreService } from './modules/prisma/store/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from 'cors';

const options: unknown = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
} as CorsOptions;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.enableCors(options);
  // Ativar documentação automática da API
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaBlogService = app.get(PrismaBlogService);
  const prismaStoreService = app.get(PrismaStoreService);
  //await prismaBlogService.enableShutdownHooks(app);
  //await prismaStoreService.enableShutdownHooks(app);

  // Ativar validação de erros no corpo da solicitação - class-validator
  // Remoção automática de propriedades sem decoradores - DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    }),
  );

await app.listen(3001).then(async() => {
console.log(`
---------------------------------
🏁 ${await app.getUrl()}
---------------------------------`);
});
}
bootstrap();
