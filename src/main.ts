import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { TransformInterceptor } from "./common/interceptor/transform.interceptor"
import { HttpExceptionFilter } from "./common/filters/http-exception.filter"
import { ValidationPipe } from "./common/pipe/validation.pipe"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // global api前缀
    app.setGlobalPrefix("/v1")
    // 响应管道拦截过滤
    app.useGlobalInterceptors(new TransformInterceptor())
    // Dto响应管道过滤
    app.useGlobalPipes(new ValidationPipe())
    // 异常管道拦截过滤
    app.useGlobalFilters(new HttpExceptionFilter())
    await app.listen(5600)
}

bootstrap()
