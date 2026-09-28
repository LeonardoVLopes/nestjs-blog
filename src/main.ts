import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { parseCorsWhitelist } from './common/utils/parse-cors-whitelist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  const corsWhitelist = parseCorsWhitelist(process.env.CORS_WHITELIST ?? '')

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (...args:any[]) => void,
    ) => {
      // requisicao sem origin ou sem incluir uma origem conhecisa
      // por corsWhitelist e permitida
      if (!origin || corsWhitelist.includes(origin)) {
        return callback(null, true)
      }

      // requisicoes com origin mas nao conhecemos
      // negamos
      return callback(new Error('not allowed by CORS'), false)
    }
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: false,
    }),
  );
  await app.listen(process.env.APP_PORT ?? 3001);
}
bootstrap();
