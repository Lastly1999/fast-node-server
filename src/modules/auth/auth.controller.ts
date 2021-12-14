import { Controller, Post, Get, Patch, Body } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { FindUserDto } from "./dto/find-user.dto"

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    public async authLogin(@Body() findUserDto: FindUserDto) {
        return await this.authService.authLogin(findUserDto)
    }

    @Get("/code")
    public async authImgCode() {
        return this.authService.generateUserSvgCode()
    }

    @Get("/menu")
    public async getSystemAuthMenu() {
        return "auth_menu"
    }

    @Get("/menuids")
    public async getSystemAuthMenuIds() {
        return "ids"
    }
    @Patch("/menu")
    public async updateRoleMenus() {
        return "update"
    }

    @Patch("/user")
    public async updateUserRole() {
        return "update"
    }
}
