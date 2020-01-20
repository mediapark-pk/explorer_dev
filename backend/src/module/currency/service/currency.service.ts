import { Injectable } from '@nestjs/common';
import { ResponseEntity } from '@app/socket-types';
import { CurrencyAdapter } from 'src/module/currency/adapter/currency';
import {
    RawDDKMarketData,
} from '@app/common';

@Injectable()
export class CurrencyService {

    constructor(
        private readonly adapter: CurrencyAdapter
    ) {}

    async getCurrencies(): Promise<ResponseEntity<string[]>> {
        console.log('[CurrencyService] getCurrencies');

        try {
            const data = await this.adapter.getCurrencies();

            return new ResponseEntity({ data });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getDDKMarketData(): Promise<ResponseEntity<RawDDKMarketData>> {
        console.log('[CurrencyService] getDDKMarketData');

        try {
            const data = await this.adapter.getDDKMarketData();

            return new ResponseEntity({ data });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getDDKMarketCap(): Promise<ResponseEntity<number>> {
        console.log('[CurrencyService] getDDKMarketCap');

        try {
            const data = await this.adapter.getDDKMarketData();

            return new ResponseEntity({ data: data.market_data.market_cap['usd'] });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }

    }
}
