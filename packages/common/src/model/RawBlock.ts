import { RawDelegate } from './RawDelegate';
import { RawTransaction, Timestamp } from './RawTransaction';

export class RawBlock {
    id: string;
    version?: number;
    delegate: RawDelegate;
    createdAt: Timestamp;
    height: number;
    previousBlockId?: string;
    transactionCount: number;
    transactions?: Array<RawTransaction>;
    amount: number;
    fee: number;
    payloadHash?: string;
    generatorPublicKey?: string;
    signature?: string;
    relay?: number;
}
