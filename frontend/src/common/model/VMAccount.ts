import { RawAccount } from '@app/common';

export type Address = string;

export type PublicKey = string;

export class VMAccount {
     address: Address;
     delegateName?: string;
     publicKey: PublicKey;
     secondPublicKey?: PublicKey;
     actualBalance: number;
     transactionCount: number;

    constructor(raw: RawAccount) {
        this.address = raw.address;
        this.delegateName = raw.delegate.username;
        this.publicKey = raw.publicKey;
        this.secondPublicKey = raw.secondPublicKey;
        this.actualBalance = raw.actualBalance;
        this.transactionCount = raw.transactionCount;
    }

}
