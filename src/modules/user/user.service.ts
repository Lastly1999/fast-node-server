import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/create-user.dto"

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    /**
     * 创建用户
     * @param createUserDto
     */
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.create(createUserDto)
        return await this.userRepository.save(user).catch(() => {
            throw new HttpException(
                "新增用户失败",
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        })
    }
}
