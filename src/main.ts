import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('My Blog API')
    .setDescription(
      'API for creating, reading, updating, and deleting blog posts',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    }, 'Authorization')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      // Add the following line to include headers in the Swagger UI
      displayRequestDuration: true,
      filter: true,
      showMutatedRequest: true,
      showRequestDuration: true,
      validatorUrl: null,
    },
  });
  const port = process.env.PORT || 3000;
  console.log(port);
  await app.listen(port);
}
bootstrap();
