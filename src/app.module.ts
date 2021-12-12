import { Module } from "@nestjs/common"
import { AuthModule } from "./modules/auth/auth.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { RoleModule } from "./modules/role/role.module"
import { BaseMenuModule } from "./modules/base-menu/base-menu.module"
import { UserModule } from "./modules/user/user.module"
import { UploadModule } from "./modules/upload/upload.module"
import { DepartmentModule } from "./modules/department/department.module"
import { ToolsModule } from "./modules/tools/tools.module"
import { RedisCacheModule } from "./modules/redis-cache/redis-cache.module"
import mysqlConfig from "./config/mysql.config"
import { ConfigModule } from "@nestjs/config"
import configuration from "./config/configuration"

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        TypeOrmModule.forRoot(mysqlConfig),
        RedisCacheModule,
        AuthModule,
        RoleModule,
        BaseMenuModule,
        UserModule,
        UploadModule,
        DepartmentModule,
        ToolsModule,
    ],
})
export class AppModule {}
