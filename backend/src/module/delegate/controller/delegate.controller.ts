import { Injectable } from '@nestjs/common';
import { Body, RPC, RPCLog } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { DelegateService } from 'src/module/delegate/service/delegate.service';
import { Request } from '@app/web';
import * as geoip from 'geoip-lite';

@RPCLog
@Injectable()
export class DelegateController {

  constructor(
      private readonly service: DelegateService,
  ) { }

  @RPC(SocketCode.GET_DELEGATES)
  async findAll(@Body() request: Request) {
    return await this.service.findAll(request);
  }

  @RPC(SocketCode.GET_TOP_DELEGATES)
  async findTop(@Body() request: Request) {
    return await this.service.findTop(request);
  }

  @RPC(SocketCode.GET_DELEGATES_SUMMARY)
  async getAllSummary() {
    return await this.service.getAllSummary();
  }

  @RPC(SocketCode.GET_DELEGATE_SUMMARY)
  async getSummaryForOne(@Body() id: string) {
    const ip = '207.97.227.239';
    const geo = geoip.lookup(ip);

    return await this.service.getSummaryByDelegateId(id, geo.country);
  }

  @RPC(SocketCode.GET_DELEGATE_BALANCE_VOLUME)
  async getBalanceForOne(@Body() request: Request) {
    return await this.service.getBalanceVolumeByDelegateId(request.params.id);
  }

  @RPC(SocketCode.GET_DELEGATE_FORGED_BLOCKS)
  async getForgedBlocksForOne(@Body() request: Request) {
    return await this.service.getForgedBlocksByDelegateId(request);
  }

  @RPC(SocketCode.GET_DELEGATE_VOTES)
  async getVotesForOne(@Body() request: Request) {
    return await this.service.getVotesByDelegateId(request);
  }

  @RPC(SocketCode.ADD_DELEGATE_TO_FAVORITES)
  async addDelegateToFavorites(@Body() id: string) {
    return await this.service.addDelegateToFavorites(id);
  }

}
