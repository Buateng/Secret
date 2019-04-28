import { Module } from '@nestjs/common';
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsController } from "./restaurants.controller";
@Module({

    imports: [],
    controllers: [RestaurantsController],
    providers: [RestaurantsService]

})
export class RestaurantsModule {}
