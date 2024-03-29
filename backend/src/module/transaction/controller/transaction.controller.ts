import { Injectable } from '@nestjs/common';
import { Body, RPC, RPCLog } from '@app/socket-nest';
import { SocketCode, TransactionId } from '@app/common';
import { TransactionService } from 'src/module/transaction/service/transaction.service';
import { Request } from '@app/web';

@RPCLog
@Injectable()
export class TransactionController {

  constructor(
      private readonly service: TransactionService,
  ) { }

  @RPC(SocketCode.GET_TRANSACTIONS)
  public async getTransactions(@Body() request: Request) {
      return await this.service.getTransactions(request);
  }

  @RPC(SocketCode.GET_TRANSACTION)
  public async getTransaction(@Body() id: TransactionId) {
      return await this.service.getTransaction(id);
  }

  @RPC(SocketCode.GET_TRANSACTIONS_BY_BLOCK_ID)
  public async getTransactionsByBlockId(@Body() request: Request) {
      return await this.service.getTransactionsByBlockId(request);
  }

  @RPC(SocketCode.GET_TRANSACTIONS_BLOCKCHAIN_INFO)
  async getTransactionsBlockchainInfo() {
      return this.service.getTransactionsBlockchainInfo();
  }

}
