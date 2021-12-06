import { Logger as Nestlogger } from "@nestjs/common"
import { Logger, QueryRunner } from "typeorm"

export class MyCustomLogger implements Logger {
    private readonly logger = new Nestlogger()

    // 实现logger类的所有方法
    log(
        level: "log" | "info" | "warn",
        message: any,
        queryRunner?: QueryRunner,
    ): any {
        this.logger.log(String(message).replace(/[\r\n]/g, ""))
    }

    logMigration(message: string, queryRunner?: QueryRunner): any {
        this.logger.log(`TypeOrm :${message.replace(/[\r\n]/g, "")}`)
    }

    logQuery(
        query: string,
        parameters?: any[],
        queryRunner?: QueryRunner,
    ): any {
        this.logger.log(`TypeOrm :${query.replace(/[\r\n]/g, "")}`)
    }

    logQueryError(
        error: string | Error,
        query: string,
        parameters?: any[],
        queryRunner?: QueryRunner,
    ): any {
        this.logger.error(parameters, error)
    }

    logQuerySlow(
        time: number,
        query: string,
        parameters?: any[],
        queryRunner?: QueryRunner,
    ): any {
        this.logger.error(time, query)
    }

    logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
        this.logger.error(message, queryRunner)
    }
}
