import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreatePlaceDto } from "./Dto/create-places.dto";
import { PlacesService } from "./places.service";
import { Place } from "./interfaces/Place";
@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) {}

    @Get()
    getPlaces(): Place[] {
        return this.placesService.getPlaces();
    }

    @Get(':id')
    getplace(@Param('id') id){
        return this.placesService.getPlace(parseInt(id));
    }


    @Post()
    createPlace(@Body() place: CreatePlaceDto): string {
        console.log(place);
        return 'creando un lugar';
    }

    @Delete(':id')
    deletePlace(@Param('id') id):string {
        console.log(id);
        return 'borrando lugar';
    }

    @Put(':id')
    updatePlace(@Body() place: CreatePlaceDto, @Param('id') id):string{
        console.log(place);
        console.log(id);
        return 'actualizando un lugar';
    }


}
