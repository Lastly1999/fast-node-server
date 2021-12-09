import { Module } from "@nestjs/common"
import { AuthModule } from "./modules/auth/auth.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { RoleModule } from "./modules/role/role.module"
import { BaseMenuModule } from "./modules/base-menu/base-menu.module"
import { UserModule } from "./modules/user/user.module"
import { UploadModule } from "./modules/upload/upload.module"
import mysqlConfig from "./config/mysql.config"

@Module({
    imports: [
        TypeOrmModule.forRoot(mysqlConfig),
        AuthModule,
        RoleModule,
        BaseMenuModule,
        UserModule,
        UploadModule,
    ],
})
export class AppModule {}
