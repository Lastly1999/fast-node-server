import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { UserController } from "./user.controller"
import { UserService } from "./user.service"

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    exports: [UserModule],
    providers: [UserService],
})
export class UserModule {}
