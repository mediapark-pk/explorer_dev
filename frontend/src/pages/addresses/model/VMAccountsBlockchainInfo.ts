import { RawAccountsBlockchainInfo } from '@app/common';

export class VMAccountsBlockchainInfo {
    totalSupply: number;
    circulatingSupply: number;
    tokenHolders: number;
    totalStakeHolders: number;
    totalStakeAmount: number;
    addressesQuantity: number;

    constructor(raw: RawAccountsBlockchainInfo) {
        this.totalSupply = raw.totalSupply;
        this.circulatingSupply = raw.circulatingSupply;
        this.tokenHolders = raw.tokenHolders;
        this.totalStakeHolders = raw.totalStakeHolders;
        this.totalStakeAmount = raw.totalStakeAmount;
        this.addressesQuantity = raw.addressesQuantity;
    }
}
