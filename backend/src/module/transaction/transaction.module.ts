import { Module } from '@nestjs/common';
import { TransactionController } from 'src/module/transaction/controller/transaction.controller';
import { TransactionService } from 'src/module/transaction/service/transaction.service';
import { TransactionEventsController } from 'src/module/transaction/controller/events.controller';

@Module({
    providers: [
        TransactionController,
        TransactionEventsController,
        TransactionService
    ]
})
export class TransactionModule { }
