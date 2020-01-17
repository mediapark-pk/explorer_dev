import { Module } from '@nestjs/common';
import { TransactionController } from 'src/module/transaction/controller/transaction.controller';
import { TransactionService } from 'src/module/transaction/service/transaction.service';

@Module({
    providers: [
        TransactionController,
        TransactionService
    ]
})
export class TransactionModule { }
