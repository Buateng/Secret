import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateRestaurantDto } from "./Dto/create-restaurants.dto";
import { RestaurantsService } from "./restaurants.service";
import { Restaurant } from "./Interfaces/Restaurants";
@Controller('restaurants')
export class RestaurantsController {

constructor(private restaurantsService: RestaurantsService) {}

@Get()
getRestaurants(): Restaurant[] {
    return this.restaurantsService.getRestaurants();
}

@Get(':id')
getRestaurant(@Param('id') id){
    return this.restaurantsService.getRestaurant(parseInt(id));
}


@Post()
createrestaurants(@Body() restaurants: CreateRestaurantDto){
    console.log(restaurants);
    return 'creando restaurantes';
}

@Delete(':id')
deleterestaurants(@Param('id') id):string{
    console.log(id);
    return 'borrando restaurantes';
}

@Put(':id')
updaterestaurants(@Body() restaurants: CreateRestaurantDto, @Param('id') id):string{
    console.log(restaurants);
    console.log(id);
    return 'actualizando restaurantes';
}



}
