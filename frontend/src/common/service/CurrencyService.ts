import { Socket } from '@app/socket-client';
import { singleton } from 'src/container';

import { 
    Response, ResponseList,
 } from '@app/web';

import {
    SocketCode,
    RawDDKMarketData,
    RawChartData,
 } from '@app/common';

@singleton
export class CurrencyService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getSupportedCurencies(): Promise<Response<string[]>> {
        return this.socket.query(SocketCode.GET_CURRENCIES);
    }

    async getDDKMarketData(): Promise<Response<RawDDKMarketData>> {
        return this.socket.query(SocketCode.GET_DDK_MARKET_DATA);
    }

    async getDDKMarketCapitalization(): Promise<Response<number>> {
        return this.socket.query(SocketCode.GET_DDK_MARKET_CAP);
    }

    async getDDKMarketChart(request: Request): Promise<ResponseList<RawChartData[]>> {
        return this.socket.query(SocketCode.GET_CAPITALIZATION_CHART_DATA, request);
    }
}
