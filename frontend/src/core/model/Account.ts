import { Delegate } from 'src/core/model/Delegate';
import { StakeOrder } from 'src/core/model/StakeOrder';

export type Address = string;

export type PublicKey = string;

class Account {
    public address: Address;
    public isDelegate: boolean;
    public publicKey: PublicKey;
    public secondPublicKey?: PublicKey;
    public actualBalance: number;
    public votes: Array<Delegate>;
    public stakes: Array<StakeOrder>;
    public referrals: Array<any>;

}

export default Account;
