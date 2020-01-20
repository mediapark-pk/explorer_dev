import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { CurrencyService } from 'src/module/currency/service/currency.service';

@Injectable()
export class EventsController {

  intervals = [];

  constructor(
    private readonly service: CurrencyService,
    private readonly api: ApiService,
  ) {
    // TODO: listen by socket client from ddk.core or create decorator like @RPC
    this.intervals.every(int => clearInterval(int));

  }

}
