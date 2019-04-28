import { Injectable } from '@nestjs/common';
import { Person } from "./Interfaces/Person";

@Injectable()
export class PersonsService {

    persons: Person[] = [{
    id: 1,
    nombre: "Jose",
    edad: 20,
    mail: "ejemplo@mail.com",
    registred: true

    },
    {
        id: 2,
        nombre: "Paco",
        edad: 20,
        mail: "ejemplo@mail.com",
        registred: true
    
        }
];

getPersons(): Person[] {
    return this.persons;
    }


getPerson(id: number): Person{
    return this.persons.find(person => person.id === id)
}};