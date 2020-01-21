import { RawTransactionsBlockchainInfo } from '@app/common';

export class VMTransactionsBlockchainInfo {
    totalTxnNumber: number;
    totalTxnVolume: string;
    averageTxnPerDay?: string;
    averageTxnPerBock?: string;
    sentToday?: string;
    votesToday?: string;

    // TODO: Consider implementing global Currency class.
    private currencySignature: string = 'DDK';
    private toCurrency = (value: number): string => (value + ' ' + this.currencySignature);

    constructor(raw: RawTransactionsBlockchainInfo) {
        this.totalTxnNumber = raw.totalTxnNumber;
        this.totalTxnVolume = this.toCurrency(raw.totalTxnVolume);
        this.averageTxnPerDay = this.toCurrency(raw.averageTxnPerDay);
        this.averageTxnPerBock = this.toCurrency(raw.averageTxnPerBock);
        this.sentToday = this.toCurrency(raw.sentToday);
        this.votesToday = this.toCurrency(raw.votesToday);
    }
}
