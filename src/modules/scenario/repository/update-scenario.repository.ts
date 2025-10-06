import { UpdateScenarioDto } from './../dto/update-scenario.dto';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class UpdateScenarioRepository {
    constructor(private readonly prisma: PrismaService){}

    async UpdateScenario (id: string, data : UpdateScenarioDto){
    const scenario = await this.prisma.scenario.update({ where: {id}, data});
    return scenario;
    }
}