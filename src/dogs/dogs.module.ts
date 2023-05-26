import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import {Dog} from "../entity/dog.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([Dog])],
    controllers: [DogsController],
    providers: [DogsService],
})
export class DogsModule {}