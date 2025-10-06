import { Injectable, Logger } from "@nestjs/common";
import { UpdateOptionRepository } from "../repository/update-option.repository";
import { UpdateOptionDto } from "../dto/update-option.dto";


@Injectable()
export class UpdateOptionUseCase {
    constructor(
        private readonly updateoptionrepository: UpdateOptionRepository,
        private logger: Logger
    ){}

    async execute(id: string, data : UpdateOptionDto){
        try{
        const option = await this.updateoptionrepository.UpdateOption(id, data)
       
        return option;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}