import { RawTransactionsBlockchainInfo } from '@app/common';

export class TransactionsBlockchainInfo {
    totalTxnNumber: number;
    totalTxnVolume: number;
    averageTxnPerDay?: number;
    averageTxnPerBock?: number;
    sentToday?: number;
    votesToday?: number;

    constructor(raw: RawTransactionsBlockchainInfo) {
        this.totalTxnNumber = raw.totalTxnNumber;
        this.totalTxnVolume = raw.totalTxnVolume;
        this.averageTxnPerDay = raw.averageTxnPerDay;
        this.averageTxnPerBock = raw.averageTxnPerBock;
        this.sentToday = raw.sentToday;
        this.votesToday = raw.votesToday;
    }
}
