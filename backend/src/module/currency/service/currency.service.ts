import { Injectable, HttpService } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import {
    RawDDKMarketData,
    ITicker,
    RawChartData,
} from '@app/common';
import { first } from 'rxjs/operators';
import { ICurrencyService } from 'src/module/currency/service';

import {
    getChartDataMocks
} from 'src/_mocks_';

const mapToTicker = (data: any): ITicker => {
    return {
        market: { ...data.market },
        target: data.target,
        last: data.last,
        volume: data.volume,
        lastInCurrency: { ...data.converted_last },
        url: data.trade_url,
    };
};

const mapToRaw = (data: any): RawDDKMarketData => {
    return {
        price: { ...data.market_data.current_price },
        highest: { ...data.market_data.ath },
        lowest: { ...data.market_data.atl },
        change: { ...data.market_data.price_change_percentage_24h_in_currency },
        tickers: data.tickers.map(mapToTicker),
    };
};

const mapToChartData = (data: any): RawChartData[] => {
    return data.prices.map(([t, y]: [number, number]) => ({ t, y }));
};

@Injectable()
export class CoingeckoCurrencyService implements ICurrencyService {

    constructor(
        private readonly httpService: HttpService
    ) {}

    async getCurrencies(): Promise<ResponseEntity<string[]>> {
        try {
            const response = await this.httpService.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
                                .pipe(first())
                                .toPromise();

            return new ResponseEntity({ data: response.data });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getDDKMarketData(): Promise<ResponseEntity<RawDDKMarketData>> {
        try {
            const response = await this.httpService.get('https://api.coingecko.com/api/v3/coins/ddkoin')
                                    .pipe(first())
                                    .toPromise();

            return new ResponseEntity({ data: mapToRaw(response.data) });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getDDKMarketCap(): Promise<ResponseEntity<number>> {
        try {
            const response = await this.httpService.get('https://api.coingecko.com/api/v3/coins/markets?ids=ddkoin&vs_currency=usd')
                                    .pipe(first())
                                    .toPromise();

            const marketCap = response.data.reduce((maxCap, data) =>
                data.market_cap > maxCap ? data.market_cap : maxCap
            , 0);

            return new ResponseEntity({ data: marketCap });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getDDKMarketChart(): Promise<ResponseListEntity<RawChartData[]>> {
        try {
            const dataUSD = getChartDataMocks(50);
            const dataBTC = getChartDataMocks(50);
            const dataETH = getChartDataMocks(50);

            return new ResponseEntity({ data: {
                data: [dataETH, dataBTC, dataUSD],
                totalCount: 3
            }});
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }
}
