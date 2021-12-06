import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { TransformInterceptor } from "./interceptor/transform.interceptor"
import { HttpExceptionFilter } from "./filters/http-exception.filter"
import { ValidationPipe } from "./pipe/validation.pipe"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix("/v1") // 添加api前缀
    app.useGlobalInterceptors(new TransformInterceptor())
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new HttpExceptionFilter())
    await app.listen(5600)
}

bootstrap()
