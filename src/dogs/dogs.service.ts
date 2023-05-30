import {Inject, Injectable,Logger} from '@nestjs/common';
//import {Dog} from "./interfaces/dog.interface";
import {DataSource, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Dog} from "../entity/dog.entity";
import {DogInterface} from "./interfaces/dog.interface";

@Injectable()
export class DogsService {

    private readonly logger = new Logger(DogsService.name);

    constructor(
        @InjectRepository(Dog) private usersRepository: Repository<Dog>,private dataSource: DataSource
    ) {

        this.logger.log("init dog service")
        this.dogs = [];
    };
    private readonly dogs: Dog[] = [];


    create(dog: DogInterface) {
        const newDog = this.usersRepository.create()
        newDog.name = dog.name
        this.usersRepository.save(newDog).then(r => {
            //console.log("save dog "+newDog.id + " "+newDog.id);
            console.log(r)
            this.logger.log("save dog "+newDog.id + " "+newDog.id)
        })
    }

    findAll() : Promise<Dog[]> {
        this.logger.log("looking for all dogs ")
        return this.usersRepository.find()

    }
}