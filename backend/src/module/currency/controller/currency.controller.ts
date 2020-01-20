import { Injectable, UseInterceptors, CacheInterceptor, CacheTTL, CacheKey } from '@nestjs/common';
import { RPC } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { CurrencyService } from 'src/module/currency/service/currency.service';

@Injectable()
export class CurrencyController {

  constructor(
      private readonly service: CurrencyService,
  ) { }

  @RPC(SocketCode.GET_CURRENCIES)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('CurrencyController_getCurrencies')
  @CacheTTL(1800)
  async findAll() {
    return await this.service.getCurrencies();
  }

  @RPC(SocketCode.GET_DDK_MARKET_DATA)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('CurrencyController_findDDKMarketData')
  @CacheTTL(30)
  async findDDKMarketData() {
    return await this.service.getDDKMarketData();
  }

  @RPC(SocketCode.GET_DDK_MARKET_CAP)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('CurrencyController_findDDKMarketCap')
  @CacheTTL(30)
  async findDDKMarketCap() {
    return await this.service.getDDKMarketCap();
  }
}
