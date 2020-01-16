import { Module } from '@nestjs/common';
import { ApiModule } from '@app/socket-nest';
import { DatabaseModule } from 'src/module/database';
import { DelegateModule } from 'src/module/delegate';
import { TransactionModule } from 'src/module/transaction';

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    DelegateModule,
    TransactionModule,
  ],
  controllers: []
})
export class AppModule { }
