import {Module} from '@nestjs/common';
import {DogsModule} from "./dogs/dogs.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [DogsModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: ["entity/*.js"],
            synchronize: true,
        }),],
})
export class AppModule {
}
