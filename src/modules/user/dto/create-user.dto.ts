import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({ message: "用户名不能为空" })
    readonly userName: string
    @IsNotEmpty({ message: "密码不能为空" })
    readonly passWord: string
    @IsNotEmpty({ message: "用户昵称不能为空" })
    readonly nikeName: string
    @IsNotEmpty({ message: "角色id不能为空" })
    readonly roleId: string
    readonly userAvatar: string
}
