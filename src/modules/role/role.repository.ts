import { EntityRepository, Like, Repository } from "typeorm"
import { Role } from "./role.entity"

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
    /**
     * 查询系统角色列表
     */
    findAllSysRole(pageSize = 10, pageNo = 1, keyWords?: string) {
        return this.manager.getRepository(Role).find({
            skip: pageNo,
            take: pageSize,
            where: {
                roleName: Like(`%${keyWords}%`),
            },
        })
    }

    /**
     * 新增系统角色
     */
    async createSysRole(role: Role) {
        const user = await this.manager.getRepository(Role).create(role)
        return this.manager.save(user)
    }

    /**
     * 查询是否存在角色
     */
    async findRoleById(id: number) {
        return this.manager.getRepository(Role).find({ where: { roleId: id } })
    }

    /**
     * 更新角色
     */
    async updateRole(id: number, role: Role) {
        const beforeCache = await this.manager.getRepository(Role).update(id, role)
        return this.manager.save(beforeCache)
    }
}
