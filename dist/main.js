"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const mementTimezone = require("moment-timezone");
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const apiPrefix = process.env.API_PREFIX || '/api';
    const logger = new common_1.Logger('bootstrap');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('bomorder')
        .setDescription('The bomorder API description')
        .setVersion('1.0')
        .addTag('bomorder')
        .addBearerAuth()
        .addServer(apiPrefix)
        .addSecurity('bearer', {
        type: 'http',
        scheme: 'bearer',
    })
        .addSecurityRequirements('bearer')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ limit: '50mb', extended: true }));
    app.enableCors();
    mementTimezone.tz.setDefault('Asia/Bangkok');
    swagger_1.SwaggerModule.setup('api', app, document);
    try {
        await app.listen(app.get(config_1.ConfigService).get('port') || 3000);
        logger.log(`Server running on ${app.getUrl}`);
    }
    catch (error) {
        logger.error('Error: ', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map