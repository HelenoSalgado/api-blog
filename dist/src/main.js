"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("./modules/prisma/blog/prisma.service");
const prisma_service_2 = require("./modules/prisma/store/prisma.service");
const common_1 = require("@nestjs/common");
const options = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('v1');
    app.enableCors(options);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Median')
        .setDescription('The Median API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const prismaBlogService = app.get(prisma_service_1.PrismaBlogService);
    const prismaStoreService = app.get(prisma_service_2.PrismaStoreService);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true
    }));
    await app.listen(3001).then(async () => {
        console.log(`
---------------------------------
🏁 ${await app.getUrl()}
---------------------------------`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map