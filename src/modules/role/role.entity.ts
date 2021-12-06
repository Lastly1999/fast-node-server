import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { User } from "../user/user.entity"

@Entity("sys_roles")
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "role_id", comment: "角色id" })
    roleId

    @Column({ name: "role_name", comment: "角色名称" })
    roleName?: string

    @Column({ comment: "角色别名" })
    describe?: string

    @CreateDateColumn({ name: "create_at" })
    createAt?: Date

    @UpdateDateColumn({ name: "update_at" })
    updateAt?: Date

    @ManyToMany((type) => User, (user) => user.roles)
    @JoinColumn({
        referencedColumnName: "user_id",
    })
    users: User[]
}
