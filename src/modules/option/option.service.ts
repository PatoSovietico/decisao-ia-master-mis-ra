import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteOptionUseCase, findonOptionUseCase, ListOptionUseCase } from './use-case';
import { UpdateOptionUseCase } from './use-case/update-option.use-case';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase,
     private readonly listOptionUseCase: ListOptionUseCase, 
     private readonly findonOptionUseCase: findonOptionUseCase, 
     private readonly updateOptionUseCase: UpdateOptionUseCase,
     private readonly deleteOptionUseCase: DeleteOptionUseCase){}

  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.list();
  }

  findOne(id: string) {
    return this.findonOptionUseCase.execute(id);
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}
