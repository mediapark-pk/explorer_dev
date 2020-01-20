import { RawDDKMarketData, ITicker } from '@app/common';

export class VMMarketData implements RawDDKMarketData {
    // tslint:disable-next-line: variable-name
    market_data: {
        current_price: { [code: string]: number; };
        ath: { [code: string]: number; };
        atl: { [code: string]: number; };
        high_24h: { [code: string]: number; };
        low_24h: { [code: string]: number; };
        price_change_percentage_24h: number;
        price_change_percentage_24h_in_currency: { [code: string]: number; };
        market_cap: { [code: string]: number; };
    };
    tickers: ITicker[];

    getInfo(currency: string, value: number) {
        return {
            value: this.market_data.current_price[currency] * value,
            change: this.market_data.price_change_percentage_24h_in_currency[currency],
            sell: this.tickers
                .filter(t => t.target.toLowerCase() === currency.toLowerCase())
                .reduce(
                    (higgestTicker, ticker) =>
                        !higgestTicker || ticker.converted_last[currency] > higgestTicker.converted_last[currency]
                            ? ticker
                            : higgestTicker,
                    null),
            buy: this.tickers
                .filter(t => t.target.toLowerCase() === currency.toLowerCase())
                .reduce(
                    (lowestTicker, ticker) =>
                        !lowestTicker || ticker.converted_last[currency] < lowestTicker.converted_last[currency]
                            ? ticker
                            : lowestTicker,
                    null),
            low: this.market_data.atl[currency],
            hight: this.market_data.ath[currency],
        };
    }

    getPrice(currency: string) {
        return this.market_data.current_price[currency];
    }
}
