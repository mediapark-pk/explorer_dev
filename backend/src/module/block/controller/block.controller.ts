import { Injectable } from '@nestjs/common';
import { Body, RPC } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { BlockService } from 'src/module/block/service/block.service';
import { Request } from '@app/web';

@Injectable()
export class BlockController {

  constructor(
      private readonly service: BlockService,
  ) { }

  @RPC(SocketCode.GET_BLOCKS)
  async findAll(@Body() request: Request) {
    return await this.service.findAll(request);
  }

}
