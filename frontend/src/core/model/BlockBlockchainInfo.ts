export type LastBlockId = string;

export class BlockBlockchainInfo {
    id: LastBlockId;
    height: number;
    createdAt: number;
    totalBlockTime?: number;
    totalFeeAmount?: number;
    totalConnected?: number;
    totalStakeAmount: number;
}
