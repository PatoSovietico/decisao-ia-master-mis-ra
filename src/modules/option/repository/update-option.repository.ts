import { UpdateOptionDto } from './../dto/update-option.dto';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class UpdateOptionRepository {
    constructor(private readonly prisma: PrismaService){}

    async UpdateOption (id: string, data : UpdateOptionDto){
    const option = await this.prisma.option.update({ where: {id}, data});
    return option;
    }
}