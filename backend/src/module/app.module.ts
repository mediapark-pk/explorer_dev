import { Module } from '@nestjs/common';
import { ApiModule } from '@app/socket-nest';
import { DatabaseModule } from 'src/module/database';
import { DelegateModule } from 'src/module/delegate';

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    DelegateModule,
  ],
  controllers: []
})
export class AppModule { }
