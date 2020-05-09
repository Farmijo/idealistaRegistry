import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { Criteria } from './criteria.entity';

@Injectable()   
export class CriteriaService {

    constructor (
    @InjectRepository(Criteria) private readonly criteria: Repository<Criteria> ) {}

    findAll() {
        return this.criteria.find();
    }

    findOneById(id: any) {
        return this.criteria.findByIds(id)
    }
    

    create(newEntry: Criteria) { 
        this.criteria.save(newEntry);
    } 

}
