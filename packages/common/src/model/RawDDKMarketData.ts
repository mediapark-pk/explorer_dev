export type ITicker = {
    base: string;
    target: string;
    market: {
        name: string;
        identifier: string;
    };
    last: number;
    volume: number;
    converted_last: { [code: string]: number; };
    trade_url: string;
}

export type RawDDKMarketData = {
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
}
