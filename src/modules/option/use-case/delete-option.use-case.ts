import { Injectable, Logger } from "@nestjs/common";
import { DeleteOptionRepository } from "../repository/delete-option.repository";

@Injectable()
export class DeleteOptionUseCase {
    constructor(
        private readonly deleteOptionRepository: DeleteOptionRepository,
        private logger: Logger
    ){}

    async execute(id: string){
        try{
        const scenario = await this.deleteOptionRepository.DeleteOption(id)
       
        return scenario;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}