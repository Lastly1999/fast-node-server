import { Body, Controller, Post } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UserService } from "./user.service"
import { EntityManager, Transaction, TransactionManager } from "typeorm"

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("user")
    @Transaction()
    createUser(
        @Body() createUserDto: CreateUserDto,
        @TransactionManager() manage: EntityManager,
    ) {
        return this.userService.createUser(createUserDto, manage)
    }
}
