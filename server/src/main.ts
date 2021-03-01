import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.use(cookieParser());

  await app.listen(4000);
}
bootstrap();
