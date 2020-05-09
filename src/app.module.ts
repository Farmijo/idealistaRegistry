import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriteriaModule } from './criteria/criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CriteriaModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
