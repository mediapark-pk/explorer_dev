import { Module } from '@nestjs/common';
import { ApiModule } from '@app/socket-nest';
import { DatabaseModule } from 'src/module/database';
import { DelegateModule } from 'src/module/delegate';
import { AccountModule } from 'src/module/account';
import { CommonModule } from 'src/module/common';
import { CurrencyModule } from 'src/module/currency';
import { BlockModule } from 'src/module/block';

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    DelegateModule,
    AccountModule,
    BlockModule,
    CommonModule,
    CurrencyModule,
  ],
  controllers: []
})
export class AppModule { }
