import { Injectable, HttpService } from '@nestjs/common';
import { ICurrencyAdapter } from 'src/module/currency/adapter/currency/adapter.interface';
import { first } from 'rxjs/operators';

@Injectable()
export class CoingeckoAdapter implements ICurrencyAdapter {

    constructor(
        private readonly httpService: HttpService
    ) { }

    async getCurrencies() {
        console.log('[CoingeckoAdapter]: getCurrencies');
        const response = await this.httpService.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
                                .pipe(first())
                                .toPromise();
        return response.data;
    }

    async getDDKMarketData() {
        console.log('[CoingeckoAdapter]: getDDKMarketData');
        const response = await this.httpService.get('https://api.coingecko.com/api/v3/coins/ddkoin')
                                .pipe(first())
                                .toPromise();
        return response.data;
    }

}
