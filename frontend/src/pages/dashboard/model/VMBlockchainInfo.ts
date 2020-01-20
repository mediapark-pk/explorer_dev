import { RawBlockchainInfo } from '@app/common';

export class VMBlockchainInfo {
    airdropBalance: number;
    circulatingSupply: number;
    tokenHolders: number;
    totalStakeAmount: number;
    totalStakeHolders: number;
    totalSupply: number;

    constructor(raw: RawBlockchainInfo) {
        this.totalStakeHolders = raw.totalStakeHolders;
        this.circulatingSupply = raw.circulatingSupply;
        this.tokenHolders = raw.tokenHolders;
        this.totalStakeAmount = raw.totalStakeAmount;
        this.airdropBalance = raw.airdropBalance;
        this.totalSupply = raw.totalSupply;
    }
}
