import { Injectable } from '@nestjs/common';
import { RPC } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { CommonService } from 'src/module/common/service/common.service';

@Injectable()
export class CommonController {

  constructor(
      private readonly service: CommonService,
  ) { }

  @RPC(SocketCode.GET_BLOCKCHAIN_INFO)
  async findAll() {
    return await this.service.findBlockchainInfo();
  }

}
