import { Module } from '@nestjs/common';
import { PersonsService } from "./persons.service";
import { PersonsController } from "./persons.controller";
@Module({
    imports:[],
    controllers:[PersonsController],
    providers:[PersonsService]

})
export class PersonsModule {}
