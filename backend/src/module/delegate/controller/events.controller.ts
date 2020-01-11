import { Body, Injectable } from '@nestjs/common';
import { RPC, ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { DelegateService } from 'src/module/delegate/service/delegate.service';
import { Request } from '@app/web';

@Injectable()
export class EventsController {

  constructor(
    private readonly service: DelegateService,
    private readonly api: ApiService,
  ) {
    // TODO: listen by socket client from ddk.core or create decorator like @RPC
    setInterval(this.onInfoUpdated.bind(this), 20000);
  }

  async onInfoUpdated() {
    this.api.sendToAll(SocketCode.ON_DELEGATES_INFO_UPDATE, await this.service.stats());
  }
}
