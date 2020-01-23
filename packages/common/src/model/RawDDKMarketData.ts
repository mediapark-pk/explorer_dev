export type ITicker = {
    market: {
        name: string;
        identifier: string;
    };
    target: string;
    last: number;
    volume: number;
    lastInCurrency: Record<string, number>;
    url: string;
}

export type RawDDKMarketData = {
    price: Record<string, number>;
    highest: Record<string, number>;
    lowest: Record<string, number>;
    change: Record<string, number>;
    tickers: ITicker[];
}
