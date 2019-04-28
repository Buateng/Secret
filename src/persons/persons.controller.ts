import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreatePersonDto } from "./Dto/create-persons.dto";
import { PersonsService } from "./persons.service";
import { Person } from "./Interfaces/Person";
import { async } from 'rxjs/internal/scheduler/async';
import { get } from 'https';
@Controller('persons')
export class PersonsController {
    
    constructor(private personsService: PersonsService) {}

    @Get()
    getPersons(): Person[] {
        return this.personsService.getPersons();
    }

    @Get(':id')
        getPerson(@Param('id') id: string){
        return this.personsService.getPerson(parseInt(id))
    }
    

    @Post()
    async createPersons(@Body() persona:CreatePersonDto){
        console.log(persona);
        return 'creando persona'
    }

    @Delete(':id')
    deletePerson(@Param('id') id): string{
        console.log(id)
        return 'borrando persona'
    }

    @Put(':id')
    updatePerson(@Body() persona:CreatePersonDto, @Param('id') id): string{
        console.log(persona)
        console.log(id)
        return 'actualizando persona'
    }
}
