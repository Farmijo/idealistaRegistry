import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CriteriaService } from './criteria.service';

@Controller('criterias')
export class CriteriaController {
    constructor (private readonly criteriaService: CriteriaService ) {}
    
    @Get()
    findAll() {
        return this.criteriaService.findAll(); 
    }
    
    @Get(':entryId')
    findOneById(@Param('criteriaId') entryId) {
        return this.criteriaService.findOneById(entryId)
    }
    
    @Post()
    create(@Body() entry) {
        return this.criteriaService.create(entry); 
    }

}