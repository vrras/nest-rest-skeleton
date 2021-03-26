import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { ApplicationContext } from './app.context';
import { Config } from './helpers/config.helper';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { UndefinedInterceptor } from './interceptors/undefined.interceptor';

async function bootstrap() {
  const app = await ApplicationContext();
  app.enableCors();
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new UndefinedInterceptor());
  
  const options = new DocumentBuilder()
    .setTitle('Product')
    .setDescription('Simple service for products management')
    .setVersion('1.0.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(Config.getNumber('APP_PORT'));
}
bootstrap();
