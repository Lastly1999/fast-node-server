import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { Role } from "../role/role.entity"

@Entity("sys_base_menu")
export class BaseMenu {
    @PrimaryGeneratedColumn({ comment: "权限菜单id" })
    id: number

    @Column({ comment: "权限菜单名称" })
    name: string

    @Column({ comment: "权限菜单路径" })
    path: string

    @Column({ comment: "根菜单id" })
    parentId: number

    @Column({ comment: "图标名称" })
    icon: string

    @CreateDateColumn({ name: "create_at" })
    createAt: Date

    @UpdateDateColumn({ name: "update_at" })
    updateAt: Date

    @ManyToMany(() => Role, (Role) => Role.baseMenus)
    roles: Role[]
}
