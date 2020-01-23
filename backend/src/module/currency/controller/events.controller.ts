import { Injectable, Inject } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { ICurrencyService, DICurrencyService } from 'src/module/currency/service';

@Injectable()
export class EventsController {

  intervals = [];

  constructor(
    @Inject(DICurrencyService) private readonly service: ICurrencyService,
    private readonly api: ApiService,
  ) {
    // TODO: listen by socket client from ddk.core or create decorator like @RPC
    this.intervals.every(int => clearInterval(int));

  }

}
