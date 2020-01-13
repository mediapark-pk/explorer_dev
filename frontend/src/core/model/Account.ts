import { Delegate } from 'src/core/model/Delegate';
import { StakeOrder } from 'src/core/model/StakeOrder';

export type Address = string;

export type PublicKey = string;

export class Account {
    public address: Address;
    public delegate?: Delegate;
    public isDelegate?: boolean;
    public publicKey?: PublicKey;
    public secondPublicKey?: PublicKey;
    public actualBalance: number;
    public votes?: Array<Delegate>;
    public stakes?: Array<StakeOrder>;
    public referrals?: Array<any>;
}

export const createMockAccount = (): Account => {
    return {
        address: '4009519763706676700',
        publicKey: '2108F96093f371009dfe3bb070b6b57037c0f4104caac86024fcf215f0b6535',
        actualBalance: 2.31,
    };
};
