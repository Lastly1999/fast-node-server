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
}
