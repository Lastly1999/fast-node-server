import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import * as svgCaptcha from "svg-captcha"
import { RedisCacheService } from "../redis-cache/redis-cache.service"

@Injectable()
export class ToolsService {
    constructor(private redisCacheService: RedisCacheService) {}

    /**
     * 生成图形验证码
     * @param size
     */
    async generateSvgCode(size = 4) {
        const cap = svgCaptcha.create()
        const mathId = Number(Math.random() + Date.now()).toFixed(0)
        const keyName = "capId:"
        await this.redisCacheService.set(keyName + mathId, cap.text, 1000 * 60)
        return {
            cap: cap.data,
            mathId,
        }
    }

    /**
     * 验证图形验证码
     * @param mathId
     * @param mathText
     */
    async verifySvgCode(mathId: string, mathText: string) {
        const keyPrefix = "capId:"
        const keyName = keyPrefix + mathId
        const result = await this.redisCacheService.get(keyName)
        if (!result || result !== mathText) {
            return false
        }
        await this.redisCacheService.del(keyName)
        return true
    }
}
