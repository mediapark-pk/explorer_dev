import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { CommonService } from 'src/module/common/service/common.service';

@Injectable()
export class EventsController {

  intervals = [];

  constructor(
    private readonly service: CommonService,
    private readonly api: ApiService,
  ) {
    // TODO: listen by socket client from ddk.core or create decorator like @RPC
    this.intervals.every(int => clearInterval(int));

    this.intervals.push(setInterval(this.onBlockchaingInfoUpdate.bind(this), 20000));
  }

  async onBlockchaingInfoUpdate() {
    this.api.sendToAll(SocketCode.ON_BLOCKCHAIN_INFO_UPDATE, await this.service.findBlockchainInfo());
  }

}
