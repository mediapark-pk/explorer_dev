import { Module } from '@nestjs/common';
import { TransactionController } from 'src/module/transaction/controller/transaction.controller';
// import { EventsController } from 'src/module/transaction/controller/events.controller';
import { TransactionService } from 'src/module/transaction/service/transaction.service';

@Module({
    providers: [
        TransactionController,
        // EventsController,
        TransactionService
    ]
})
export class TransactionModule { }
