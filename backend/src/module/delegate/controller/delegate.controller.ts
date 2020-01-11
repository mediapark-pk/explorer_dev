import { Injectable } from '@nestjs/common';
import { Body, RPC, ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { DelegateService } from 'src/module/delegate/service/delegate.service';
import { Request } from '@app/web';

@Injectable()
export class DelegateController {

  constructor(
      private readonly service: DelegateService,
      private readonly api: ApiService,
  ) { }

  @RPC(SocketCode.GET_DELEGATES)
  async getAll(@Body() request: Request) {
    return await this.service.findAll(request);
  }

  @RPC(SocketCode.GET_DELEGATE)
  async get(@Body() id: string) {
    return await this.service.find(id);
  }

  @RPC(SocketCode.GET_DELEGATES_INFO)
  async getInfo() {
    return await this.service.stats();
  }

}
