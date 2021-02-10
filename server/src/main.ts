import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import bodyParser from "body-parser";
import multer from "multer";
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.enableCors();

  await app.init();
  // app.use(multer);
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.text({ type: "text/html" }));
  // app.use(bodyParser.json());

  await app.listen(4000);
}
bootstrap();
