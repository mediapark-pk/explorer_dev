import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as options from 'src/module/database/options';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot(options)
    ]
})
export class DatabaseModule { }
