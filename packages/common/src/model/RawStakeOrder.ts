export type RawStakeOrder = {
    createdAt: number;
    isActive: boolean;
    amount: number;
    voteCount: number;
    nextVoteMilestone: number;
    airdropReward: number;
    sourceTransactionId: string;
}
