import { RawDelegate } from './RawDelegate';
import { RawStakeOrder } from './RawStakeOrder';
import { RawVote} from './RawVote';

export type RawAccount = {
    address: string;
    delegate: RawDelegate;
    isDelegate: boolean;
    publicKey: string;
    secondPublicKey: string;
    actualBalance: number;
    votes: Array<RawVote>;
    stakes: Array<RawStakeOrder>;
    referrals?: Array<any>;
    createdAt: number;
    transactionCount: number;
}
