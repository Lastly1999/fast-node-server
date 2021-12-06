import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { MyCustomLogger } from "./typeorm-log"

export default {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "fnv",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    autoLoadEntities: true,
    logger: new MyCustomLogger(),
} as TypeOrmModuleOptions
