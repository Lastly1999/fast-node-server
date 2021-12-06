import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { User } from "../user/user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { FindUserDto } from "./dto/find-user.dto"

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    /**
     * 查找用户
     * @param findUserDto
     */
    async findUser(findUserDto: FindUserDto) {
        const result = await this.userRepository.findOne({
            where: {
                userName: findUserDto.userName,
                passWord: findUserDto.passWord,
            },
        })
        if (!result) {
            throw new HttpException(
                "暂未注册用户",
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
        return {
            info: result,
        }
    }
}
