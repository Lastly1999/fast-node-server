import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { Connection } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/create-user.dto"
import { UserRepository } from "./user.repository"

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    ) {}

    /**
     * 创建用户
     * @param createUserDto
     * @param manage
     */
    async createUser(createUserDto: CreateUserDto) {
        await this.userRepository
            .createUserInsertRoleIds(createUserDto)
            .catch(() => {
                throw new HttpException(
                    "创建失败",
                    HttpStatus.INTERNAL_SERVER_ERROR,
                )
            })
        return "创建成功"
    }
}
