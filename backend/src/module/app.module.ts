import { Module } from '@nestjs/common';
import { ApiModule } from '@app/socket-nest';
import { DatabaseModule } from 'src/module/database';
import { DelegateModule } from 'src/module/delegate';
import { TransactionModule } from 'src/module/transaction';
import { AccountModule } from 'src/module/account';
import { CommonModule } from 'src/module/common';
import { CurrencyModule } from 'src/module/currency';
import { BlockModule } from 'src/module/block';
import { VoteModule } from 'src/module/vote';

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    DelegateModule,
    TransactionModule,
    AccountModule,
    BlockModule,
    CommonModule,
    CurrencyModule,
    VoteModule,
  ],
  controllers: []
})
export class AppModule { }
