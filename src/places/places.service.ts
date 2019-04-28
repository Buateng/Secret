import { Injectable } from '@nestjs/common';
import { Place } from "./interfaces/Place";
@Injectable()
export class PlacesService {

    places: Place[] = [
        {
            id: 1,
            title: "Cafe Express",
            description: "asnoiwelksmdiasjd",
            address: "zona 51",
            exist: true
        },{
            id: 2,
            title: "Bar No.1",
            description: "asnoiwelksmdiasjd",
            address: "zona 52",
            exist: true
        },{
            id: 3,
            title: "Bar No.2",
            description: "asnoiwelksmdiasjd",
            address: "zona 53",
            exist: true
}];

getPlaces(): Place[] {
    return this.places;
};

getPlace(id: number): Place {
    return this.places.find(place => place.id === id);
};

}
