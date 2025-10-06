import { UpdateScenarioRepository } from './../repository/update-scenario.repository';
import { UpdateScenarioDto } from './../dto/update-scenario.dto';
import { Injectable, Logger } from "@nestjs/common";
import { DeleteScenarioRepository } from "../repository/delete-scenario.repository";


@Injectable()
export class UpdateScenarioUseCase {
    constructor(
        private readonly updateScenarioRepository: UpdateScenarioRepository,
        private logger: Logger
    ){}

    async execute(id: string, data : UpdateScenarioDto){
        try{
        const scenario = await this.updateScenarioRepository.UpdateScenario(id, data )
       
        return scenario;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}