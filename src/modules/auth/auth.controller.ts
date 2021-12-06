import { Controller, Post, Get, Patch, Body } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { FindUserDto } from "./dto/find-user.dto"

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    async authLogin(@Body() findUserDto: FindUserDto) {
        return await this.authService.findUser(findUserDto)
    }

    @Get("/code")
    async authImgCode() {
        return "authcode"
    }

    @Get("/menu")
    async getSystemAuthMenu() {
        return "auth_menu"
    }

    @Get("/menuids")
    async getSystemAuthMenuIds() {
        return "ids"
    }
    @Patch("/menu")
    async updateRoleMenus() {
        return "update"
    }

    @Patch("/user")
    async updateUserRole() {
        return "update"
    }
}
