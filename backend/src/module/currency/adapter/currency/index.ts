import { Module, HttpModule } from '@nestjs/common';
import { CoingeckoAdapter } from 'src/module/currency/adapter/currency/coingecko';

@Module({
    imports: [HttpModule],
    providers: [CoingeckoAdapter],
    exports: [CoingeckoAdapter],
})
export class CurrencyAdapterModule { }
export { CoingeckoAdapter as CurrencyAdapter };
