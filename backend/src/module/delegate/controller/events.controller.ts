import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { DelegateService } from 'src/module/delegate/service/delegate.service';

@Injectable()
export class EventsController {

  intervals = [];

  constructor(
    private readonly service: DelegateService,
    private readonly api: ApiService,
  ) {
    // TODO: listen by socket client from ddk.core or create decorator like @RPC
    this.intervals.every(int => clearInterval(int));

    this.intervals.push(setInterval(this.onAllSummaryUpdated.bind(this), 20000));
    this.intervals.push(setInterval(this.onOneSummaryUpdated.bind(this, 'someid'), 20000));
  }

  async onAllSummaryUpdated() {
    this.api.sendToAll(SocketCode.ON_DELEGATES_SUMMARY_UPDATE, await this.service.getAllSummary());
  }

  async onOneSummaryUpdated(id: string) {
    this.api.sendToAll(SocketCode.ON_DELEGATE_SUMMARY_UPDATE, await this.service.getSummaryByDelegateId(id, 'US'));
  }
  
}
