import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { DeleteScenarioUseCase, ListScenarioUseCase, findonScenarioUseCase} from './use-cases';
import { UpdateScenarioUseCase } from './use-cases/update-scenario.use-case';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase,
     private readonly listScenarioUseCase: ListScenarioUseCase, 
     private readonly findonScenarioUseCase: findonScenarioUseCase, 
     private readonly updateScenarioUseCase: UpdateScenarioUseCase,
     private readonly deleteScenarioUseCase: DeleteScenarioUseCase){}
  create(data: CreateScenarioDto) {
  return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.list();
  }

  findOne(id: string) {
    return this.findonScenarioUseCase.execute(id);
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
