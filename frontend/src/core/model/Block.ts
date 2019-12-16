import { Transaction } from 'src/core/model/Transaction';

export type BlockId = string;

export class Block {
    id: BlockId;
    version?: number;
    createdAt: number;
    height: number;
    previousBlockId?: string;
    transactionCount: number;
    amount: number;
    fee: number;
    payloadHash?: string;
    generatorPublicKey?: string;
    signature?: string;
    transactions?: Transaction[];
    relay?: number;
}
