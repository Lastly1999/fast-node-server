import { Body, Controller, Post } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UserService } from "./user.service"

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("user")
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }
}
