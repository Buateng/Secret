import { Injectable } from '@nestjs/common';
import { Restaurant } from "./Interfaces/Restaurants";
@Injectable()
export class RestaurantsService {

    restaurant: Restaurant[] = [
        {
            id: 1,
            title: "comedor el mojito",
            description: "asnoiwelksmdiasjd",
            address: "zona 51",
            exist: true
        },{
            id: 2,
            title: "comedor el mojito 2",
            description: "asnoiwelksmdiasjd",
            address: "zona 52",
            exist: true
        },{
            id: 3,
            title: "comedor el mojito 3",
            description: "asnoiwelksmdiasjd",
            address: "zona 53",
            exist: true
}];
getRestaurants(): Restaurant[] {
    return this.restaurant;
};

getRestaurant(id: number): Restaurant {
    return this.restaurant.find(restaurant => restaurant.id === id);
};

}
