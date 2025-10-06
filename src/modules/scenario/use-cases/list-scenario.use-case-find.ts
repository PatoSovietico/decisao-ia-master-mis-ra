import { Injectable, Logger } from "@nestjs/common";

import { ListScenarioRepositoryFind } from "../repository/list-scenario.repository.find";

@Injectable()
export class findonScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: ListScenarioRepositoryFind,
        private logger: Logger
    ){}

    async execute(id: string){
        try{
        const scenario = await this.createScenarioRepository.findone(id)
       
        return scenario;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}