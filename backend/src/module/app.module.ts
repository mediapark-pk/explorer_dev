import { Module } from '@nestjs/common';
import { ApiModule } from '@app/socket-nest';
import { DatabaseModule } from 'src/module/database';
import { DelegateModule } from 'src/module/delegate';
import { AccountModule } from 'src/module/account';

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    DelegateModule,
    AccountModule
  ],
  controllers: []
})
export class AppModule { }
