import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { ApplicationContext } from './app.context';
import { Config } from './shared/helpers/config.helper';
import { TransformInterceptor } from './shared/interceptors/transform.interceptor';
import { UndefinedInterceptor } from './shared/interceptors/undefined.interceptor';

async function bootstrap() {
  const app = await ApplicationContext();
  app.enableCors();
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new UndefinedInterceptor());

  if (Config.getBoolean('SWAGGER_ENABLE')) {
    const options = new DocumentBuilder()
      .setTitle(Config.get('SWAGGER_TITLE'))
      .setDescription(Config.get('SWAGGER_DESCRIPTION'))
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(Config.get('SWAGGER_PATH'), app, document);
  }

  await app.listen(Config.getNumber('APP_PORT'));
}
bootstrap();
