export enum ForgeStatus {
    WAITING = 'WAITING',
    FORGING = 'FORGING',
    FORGED = 'FORGED',
    MISSED = 'MISSED',
}

export type Location = {
    lat: number;
    long: number;
};

export type RawDelegate = {
    approval: number;
    forgedBlocks: number;
    missedBlocks: number;
    publicKey: string;
    username: string;
    votes: number;
    status: ForgeStatus;
    confirmedVoteCount: number;
    location?: Location;
};
