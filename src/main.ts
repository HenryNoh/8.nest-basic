import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //dto에서 정해놓은 값만 되게 해줌 ( 유효성 검사 )
      whitelist: true,
      // whitelist에서 잘못된 에러를 출력해줌
      forbidNonWhitelisted: true,
      // 원하는 타입으로 변경
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
