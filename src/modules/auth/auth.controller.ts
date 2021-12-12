import { Controller, Post, Get, Patch, Body, Inject } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { FindUserDto } from "./dto/find-user.dto"
import { ToolsService } from "../tools/tools.service"

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    async authLogin(@Body() findUserDto: FindUserDto) {
        return await this.authService.authLogin(findUserDto)
    }

    @Get("/code")
    async authImgCode() {
        return this.authService.generateUserSvgCode()
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
