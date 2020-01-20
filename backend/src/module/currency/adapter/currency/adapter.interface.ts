import { RawDDKMarketData } from '@app/common';

export interface ICurrencyAdapter {
    getCurrencies(): Promise<string[]>;
    getDDKMarketData(): Promise<RawDDKMarketData>;
}
