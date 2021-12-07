import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

@Entity("sys_base_menu")
export class BaseMenu {
    @PrimaryGeneratedColumn({ comment: "权限菜单id" })
    id: number

    @Column({ comment: "权限菜单名称" })
    name: string

    @Column({ comment: "权限菜单路径", nullable: true })
    path: string

    @Column({ comment: "根菜单id", nullable: true })
    parentId: number

    @Column({ comment: "图标名称", nullable: true })
    icon: string

    @CreateDateColumn({ name: "create_at" })
    createAt: Date

    @UpdateDateColumn({ name: "update_at" })
    updateAt: Date

    // @ManyToMany(() => Role, (Role) => Role.baseMenus)
    // roles: Role[]
}
