export type RawDelegate = {
    approval: number;
    forgedBlocks: number;
    missedBlocks: number;
    publicKey: string;
    username: string;
    votes: number;
    confirmedVoteCount: number;
    location?: {
        lat: number;
        long: number;
    };
};
