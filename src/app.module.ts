import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/persons.controller';
import { PersonsService } from './persons/persons.service';
import { PersonsModule } from './persons/persons.module';
import { PlacesController } from './places/places.controller';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { PlacesService } from './places/places.service';
import { PlacesModule } from './places/places.module';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [PersonsModule, PlacesModule, RestaurantsModule],
  controllers: [AppController, PersonsController, PlacesController, RestaurantsController],
  providers: [AppService, PersonsService, PlacesService, RestaurantsService],
})
export class AppModule {}
