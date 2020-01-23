import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { RawDDKMarketData, RawChartData } from '@app/common';

export interface ICurrencyService {
    getDDKMarketCap(): Promise<ResponseEntity<number>>;
    getDDKMarketData(): Promise<ResponseEntity<RawDDKMarketData>>;
    getCurrencies(): Promise<ResponseEntity<string[]>>;
    getDDKMarketChart(): Promise<ResponseListEntity<RawChartData[]>>;
}

export const DICurrencyService = Symbol.for('ICurrencyService');
