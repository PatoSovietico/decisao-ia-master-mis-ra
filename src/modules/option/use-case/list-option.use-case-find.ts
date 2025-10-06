import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepositoryFind } from "../repository/list-option.repository.find";


@Injectable()
export class findonOptionUseCase {
    constructor(
        private readonly listoptionrepositoryfind: ListOptionRepositoryFind,
        private logger: Logger
    ){}

    async execute(id: string){
        try{
        const scenario = await this.listoptionrepositoryfind.findone(id)
       
        return scenario;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}