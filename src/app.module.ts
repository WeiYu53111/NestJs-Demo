import {Module} from '@nestjs/common';
import {DogsModule} from "./dogs/dogs.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dog} from "./entity/dog.entity";

@Module({
    imports: [DogsModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '120.46.207.251',
            port: 9993,
            username: 'root',
            password: '123456',
            database: 'test',
           /* entities: ["entity/!*.js"],*/
            entities:[Dog],
            //synchronize: true,
        }),],
})
export class AppModule {
}
