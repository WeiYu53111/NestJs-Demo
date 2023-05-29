import { Controller,Get,Param } from '@nestjs/common';
import {DogsService} from "./dogs.service";
import {DogInterface} from "./interfaces/dog.interface";
import {Dog} from "../entity/dog.entity";

@Controller('dogs')
export class DogsController {


    constructor(private dogsService: DogsService) {
    }

    @Get(':id')
    async create(@Param('id') id: string): Promise<string> {
        const dog = {
            id: Number(id),
            name: "dog_"+id
        }
        await this.dogsService.create(dog)
        return `This action create a #${id} dog`;
    }

    @Get()
    async findAll(): Promise<string> {
        const dogs: Dog[] = await this.dogsService.findAll()
        let res ="";
        for (let i = 0; i < dogs.length; i++) {
            res += dogs[i].name + ","
        }
        return res;
    }
}
