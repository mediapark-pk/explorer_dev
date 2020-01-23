import { Injectable } from '@nestjs/common';
import { RPC, RPCLog, Body } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { VoteService } from 'src/module/vote/service/vote.service';
import { Request } from '@app/web';

@RPCLog
@Injectable()
export class VoteController {

  constructor(
      private readonly service: VoteService,
  ) { }

  @RPC(SocketCode.GET_VOTES)
  async findAll(@Body() request: Request) {
    return await this.service.findAll(request);
  }

}
