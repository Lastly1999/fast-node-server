import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { User } from "../user/user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { FindUserDto } from "./dto/find-user.dto"
import { ToolsService } from "../tools/tools.service"

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly toolsService: ToolsService,
    ) {}

    /**
     * 查找用户
     * @param findUserDto
     */
    async authLogin(findUserDto: FindUserDto) {
        const verifyResult = await this.toolsService.verifySvgCode(
            findUserDto.mathId,
            findUserDto.mathText,
        )
        if (!verifyResult) {
            throw new HttpException(
                "验证码错误，请重试",
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
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
