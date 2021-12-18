import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { RoleRepository } from "./role.repository"
import { Role } from "./role.entity"
import { PutRoleDto } from "./dtos/put-role.dto"
import { GetRoleDto } from "./dtos/get-role.dto"

@Injectable()
export class RoleService {
    constructor(@InjectRepository(RoleRepository) private readonly roleRepository: RoleRepository) {}

    /**
     * 查询全部系统角色
     */
    async findAllSysRoles(getRoleDto: GetRoleDto) {
        try {
            return await this.roleRepository.findAllSysRole(getRoleDto.pageSize, getRoleDto.pageNo, getRoleDto.keywords)
        } catch (e) {
            throw new HttpException("系统错误", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    /**
     * 新增系统角色
     */
    async putSysRole(putRoleDto: PutRoleDto) {
        const role = new Role()
        role.roleName = putRoleDto.roleName
        role.describe = putRoleDto.describe
        await this.roleRepository.createSysRole(role).catch(() => {
            throw new HttpException("新增角色失败", HttpStatus.INTERNAL_SERVER_ERROR)
        })
        return "新增角色成功"
    }
}
