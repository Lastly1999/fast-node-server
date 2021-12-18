import { Body, Controller, Patch, Post, Put } from "@nestjs/common"
import { RoleService } from "./role.service"
import { PutRoleDto } from "./dtos/put-role.dto"
import { GetRoleDto } from "./dtos/get-role.dto"
import { UpdateRoleDto } from "./dtos/update-role.dto"

@Controller("role")
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post("role")
    getRoles(@Body() getRoleDto: GetRoleDto) {
        return this.roleService.findAllSysRoles(getRoleDto)
    }

    @Put("role")
    AddRole(@Body() putRoleDto: PutRoleDto) {
        return this.roleService.putSysRole(putRoleDto)
    }

    @Patch("role")
    updateRole(@Body() updateRoleDto: UpdateRoleDto) {
        return this.roleService.updateRole(updateRoleDto)
    }
}
