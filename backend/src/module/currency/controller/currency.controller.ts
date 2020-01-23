// tslint:disable: no-magic-numbers
import { Injectable, Inject } from '@nestjs/common';
import { RPC, Cache, RPCLog } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { ICurrencyService, DICurrencyService } from 'src/module/currency/service';

@RPCLog
@Injectable()
export class CurrencyController {
  constructor(
      @Inject(DICurrencyService) private readonly service: ICurrencyService,
  ) { }

  @RPC(SocketCode.GET_CURRENCIES)
  @Cache(1800)
  async findCurrencies() {
    return this.service.getCurrencies();
  }

  @RPC(SocketCode.GET_DDK_MARKET_DATA)
  @Cache(60)
  async findDDKMarketData() {
    return this.service.getDDKMarketData();
  }

  @RPC(SocketCode.GET_DDK_MARKET_CAP)
  @Cache(60)
  async findDDKMarketCap() {
    return this.service.getDDKMarketCap();
  }

  @RPC(SocketCode.GET_CAPITALIZATION_CHART_DATA)
  @Cache(60)
  async findCapitalizationChartData() {
    return this.service.getDDKMarketChart();
  }
}
