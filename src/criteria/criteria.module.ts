import { Module } from '@nestjs/common';
import { Criteria } from './criteria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriaController} from "./criteria.controller"
import { CriteriaService } from "./criteria.service"
@Module({  
    imports: [TypeOrmModule.forFeature([Criteria])
  ],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})

export class CriteriaModule {
    
}
