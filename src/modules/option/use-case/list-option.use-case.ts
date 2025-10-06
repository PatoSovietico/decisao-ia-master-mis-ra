import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";

@Injectable()
export class ListOptionUseCase {
    constructor(private readonly listOptionRepository: ListOptionRepository, private readonly logger:Logger){}

    async list(){
   
        try {
            const scenario = await this.listOptionRepository.list();
            this.logger.log("scenario finds sucess")
            return scenario;
        } catch (error) {
            this.logger.error(error)
        }
    
    }
}