import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { EntityManager, Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/create-user.dto"
import { Role } from "../role/role.entity"

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    /**
     * 创建用户
     * @param createUserDto
     * @param manage
     */
    async createUser(createUserDto: CreateUserDto, manage: EntityManager) {
        const userEntity = new User()
        await this.userRepository.create(userEntity)
        return "创建成功"
    }
}
