import { RawDDKMarketData, ITicker } from '@app/common';

export class VMMarketData implements RawDDKMarketData {
    // tslint:disable-next-line: variable-name
    price: Record<string, number>;
    highest: Record<string, number>;
    lowest: Record<string, number>;
    change: Record<string, number>;
    tickers: ITicker[];

    getInfo(currency: string, value: number) {
        return {
            value: this.price[currency] * value,
            change: this.change[currency],
            sell: this.tickers
                .filter(t => t.target.toLowerCase() === currency.toLowerCase())
                .reduce(
                    (higgestTicker, ticker) =>
                        !higgestTicker || ticker.lastInCurrency[currency] > higgestTicker.lastInCurrency[currency]
                            ? ticker
                            : higgestTicker,
                    null),
            buy: this.tickers
                .filter(t => t.target.toLowerCase() === currency.toLowerCase())
                .reduce(
                    (lowestTicker, ticker) =>
                        !lowestTicker || ticker.lastInCurrency[currency] < lowestTicker.lastInCurrency[currency]
                            ? ticker
                            : lowestTicker,
                    null),
            low: this.lowest[currency],
            hight: this.highest[currency],
        };
    }

    getPrice(currency: string) {
        return this.price[currency];
    }
}
