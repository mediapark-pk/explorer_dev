import Socket from 'src/core/api/socket/Socket';
import { singleton } from 'src/container';
import { action } from 'mobx';
import { Request, Response } from '@app/web';
import { Delegate } from 'src/core/model/Delegate';
import { RawDelegatesInfo } from 'src/core/model/RawDelegatesInfo';
import { request } from 'http';

type IListResponse<T> = {
    data: T[];
    count: number;
};

export enum AllowedSorts {
    Status = 'status',
    Votes = 'votes',
    Uptime = 'uptime',
    ForgedBlocks = 'forged',
    MissedBlocks = 'missed'
}

export enum AllowedFilters {
    Name = 'name'
}

@singleton
export default class DelegatesService {

    constructor(private socket: Socket) {
    }

    @action
    async getActiveDelegates(request: Request): Promise<IListResponse<Delegate>> {
        // return this.socket.emit('GET_ACTIVE_DELEGATES', request);
        console.log('GET_ACTIVE_DELEGATES', request);
        return Promise.resolve().then(() => ({
            data: JSON.parse(`[{"username":"sd_ddk_brunei17","missedBlocks":87,"forgedBlocks":10437,"publicKey":"1b4946c967ee5c9803bc86f89a816cecab3002cea792634c1da01c6b51e717f0","votes":47774,"confirmedVoteCount":47774,"approval":99.17,"location":{"lat":40.730610,"long":-73.935242}},{"username":"sd_ddk_brunei11","missedBlocks":111,"forgedBlocks":11166,"publicKey":"945d53657fbfa6dd8aea31a45e0b719fe8a0dc9207addd771eb0644baf2773d7","votes":63589,"confirmedVoteCount":63589,"approval":99.02,"location":{"lat":51.02821,"long":156.80771}},{"username":"td080_jamiebiggsaus","missedBlocks":28,"forgedBlocks":2648,"publicKey":"111fdf3316bf0f0175954e52d4d525ba4ff44e99f9062a18b2210c1b164d844d","votes":20377,"confirmedVoteCount":20377,"approval":98.95,"location":{"lat":68.84757,"long":179.4051}},{"username":"sd_ddk_brunei16","missedBlocks":113,"forgedBlocks":10463,"publicKey":"21d0bf736db4addb886a34c7eed9aa868de8b79a214d9e1fe57d28bcfa94eb9c","votes":49447,"confirmedVoteCount":49447,"approval":98.93,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei10","missedBlocks":129,"forgedBlocks":11596,"publicKey":"15ff3fe5e20331c957cfc99d1417c7965821c336e7d8773854f7beacce05df02","votes":84818,"confirmedVoteCount":84818,"approval":98.9,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei14","missedBlocks":148,"forgedBlocks":10403,"publicKey":"7746a9dbf069439d8511397ccf018f3bfb763a54dad3d51f0a108db21da3a11c","votes":56365,"confirmedVoteCount":56365,"approval":98.6,"location":{"lat":50.45466,"long":30.5238}},{"username":"td077_rajoo","missedBlocks":45,"forgedBlocks":2944,"publicKey":"d0e33984e3982ec944e2f0fc71e168411c91cf0c7d2d3fa47d33e5abac30ccb3","votes":19572,"confirmedVoteCount":19572,"approval":98.49,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei08","missedBlocks":187,"forgedBlocks":11538,"publicKey":"9297efa076c1a6f95b85aa3fd07af577762807428a959123f3fc147911a0600f","votes":93252,"confirmedVoteCount":93252,"approval":98.41,"location":{"lat":-33.647778,"long":115.345833}},{"username":"TDA_ALL_CREV","missedBlocks":641,"forgedBlocks":39200,"publicKey":"ed6e8f15d1e6495fe613b42af080c84f8b6e23148686c4851d82287785265332","votes":151323,"confirmedVoteCount":151323,"approval":98.39,"location":{"lat":37.25784,"long":15.23257}},{"username":"DDK_Japan","missedBlocks":640,"forgedBlocks":38290,"publicKey":"1beb2d8cf4b1b849a443cd236c0ec194ead6390f4b0671cdb008d0558e252b91","votes":143533,"confirmedVoteCount":143533,"approval":98.36,"location":{"lat":48.864716,"long":2.349014}}]`),
            count: 10,    
        }));
    }

    @action
    async getAllDelegates(request: Request): Promise<IListResponse<Delegate>> {
        // return this.socket.emit('GET_DELEGATES', request);
        console.log('GET_DELEGATES', request);
        return Promise.resolve().then(() => ({
            data: JSON.parse(`[{"username":"sd_ddk_brunei17","missedBlocks":47,"forgedBlocks":10437,"publicKey":"1b4946c967ee5c9803bc86f89a816cecab3002cea792634c1da01c6b51e717f0","votes":47774,"confirmedVoteCount":47774,"approval":99.17,"location":{"lat":40.730610,"long":-73.935242}},{"username":"sd_ddk_brunei11","missedBlocks":111,"forgedBlocks":11166,"publicKey":"945d53657fbfa6dd8aea31a45e0b719fe8a0dc9207addd771eb0644baf2773d7","votes":63589,"confirmedVoteCount":63589,"approval":99.02,"location":{"lat":51.02821,"long":156.80771}},{"username":"td080_jamiebiggsaus","missedBlocks":28,"forgedBlocks":2648,"publicKey":"111fdf3316bf0f0175954e52d4d525ba4ff44e99f9062a18b2210c1b164d844d","votes":20377,"confirmedVoteCount":20377,"approval":98.95,"location":{"lat":68.84757,"long":179.4051}},{"username":"sd_ddk_brunei16","missedBlocks":113,"forgedBlocks":10463,"publicKey":"21d0bf736db4addb886a34c7eed9aa868de8b79a214d9e1fe57d28bcfa94eb9c","votes":49447,"confirmedVoteCount":49447,"approval":98.93,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei10","missedBlocks":129,"forgedBlocks":11596,"publicKey":"15ff3fe5e20331c957cfc99d1417c7965821c336e7d8773854f7beacce05df02","votes":84818,"confirmedVoteCount":84818,"approval":98.9,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei14","missedBlocks":148,"forgedBlocks":10403,"publicKey":"7746a9dbf069439d8511397ccf018f3bfb763a54dad3d51f0a108db21da3a11c","votes":56365,"confirmedVoteCount":56365,"approval":98.6,"location":{"lat":50.45466,"long":30.5238}},{"username":"td077_rajoo","missedBlocks":45,"forgedBlocks":2944,"publicKey":"d0e33984e3982ec944e2f0fc71e168411c91cf0c7d2d3fa47d33e5abac30ccb3","votes":19572,"confirmedVoteCount":19572,"approval":98.49,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei08","missedBlocks":187,"forgedBlocks":11538,"publicKey":"9297efa076c1a6f95b85aa3fd07af577762807428a959123f3fc147911a0600f","votes":93252,"confirmedVoteCount":93252,"approval":98.41,"location":{"lat":-33.647778,"long":115.345833}},{"username":"TDA_ALL_CREV","missedBlocks":641,"forgedBlocks":39200,"publicKey":"ed6e8f15d1e6495fe613b42af080c84f8b6e23148686c4851d82287785265332","votes":151323,"confirmedVoteCount":151323,"approval":98.39,"location":{"lat":37.25784,"long":15.23257}},{"username":"DDK_Japan","missedBlocks":640,"forgedBlocks":38290,"publicKey":"1beb2d8cf4b1b849a443cd236c0ec194ead6390f4b0671cdb008d0558e252b91","votes":143533,"confirmedVoteCount":143533,"approval":98.36,"location":{"lat":48.864716,"long":2.349014}}]`),
            count: 10,    
        }));
    }

    @action
    async getTopDelegates(request: Request): Promise<IListResponse<Delegate>> {
        // return this.socket.emit('GET_TOP_DELEGATES', request);
        console.log('GET_TOP_DELEGATES', request);
        return Promise.resolve().then(() => ({
            data: JSON.parse(`[{"username":"${request.params.sort}","missedBlocks":87,"forgedBlocks":10437,"publicKey":"1b4946c967ee5c9803bc86f89a816cecab3002cea792634c1da01c6b51e717f0","votes":47774,"confirmedVoteCount":47774,"approval":99.17,"location":{"lat":40.730610,"long":-73.935242}},{"username":"sd_ddk_brunei11","missedBlocks":111,"forgedBlocks":11166,"publicKey":"945d53657fbfa6dd8aea31a45e0b719fe8a0dc9207addd771eb0644baf2773d7","votes":63589,"confirmedVoteCount":63589,"approval":99.02,"location":{"lat":51.02821,"long":156.80771}},{"username":"td080_jamiebiggsaus","missedBlocks":28,"forgedBlocks":2648,"publicKey":"111fdf3316bf0f0175954e52d4d525ba4ff44e99f9062a18b2210c1b164d844d","votes":20377,"confirmedVoteCount":20377,"approval":98.95,"location":{"lat":68.84757,"long":179.4051}},{"username":"sd_ddk_brunei16","missedBlocks":113,"forgedBlocks":10463,"publicKey":"21d0bf736db4addb886a34c7eed9aa868de8b79a214d9e1fe57d28bcfa94eb9c","votes":49447,"confirmedVoteCount":49447,"approval":98.93,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei10","missedBlocks":129,"forgedBlocks":11596,"publicKey":"15ff3fe5e20331c957cfc99d1417c7965821c336e7d8773854f7beacce05df02","votes":84818,"confirmedVoteCount":84818,"approval":98.9,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei14","missedBlocks":148,"forgedBlocks":10403,"publicKey":"7746a9dbf069439d8511397ccf018f3bfb763a54dad3d51f0a108db21da3a11c","votes":56365,"confirmedVoteCount":56365,"approval":98.6,"location":{"lat":50.45466,"long":30.5238}},{"username":"td077_rajoo","missedBlocks":45,"forgedBlocks":2944,"publicKey":"d0e33984e3982ec944e2f0fc71e168411c91cf0c7d2d3fa47d33e5abac30ccb3","votes":19572,"confirmedVoteCount":19572,"approval":98.49,"location":{"lat":50.45466,"long":30.5238}},{"username":"sd_ddk_brunei08","missedBlocks":187,"forgedBlocks":11538,"publicKey":"9297efa076c1a6f95b85aa3fd07af577762807428a959123f3fc147911a0600f","votes":93252,"confirmedVoteCount":93252,"approval":98.41,"location":{"lat":-33.647778,"long":115.345833}},{"username":"TDA_ALL_CREV","missedBlocks":641,"forgedBlocks":39200,"publicKey":"ed6e8f15d1e6495fe613b42af080c84f8b6e23148686c4851d82287785265332","votes":151323,"confirmedVoteCount":151323,"approval":98.39,"location":{"lat":37.25784,"long":15.23257}},{"username":"DDK_Japan","missedBlocks":640,"forgedBlocks":38290,"publicKey":"1beb2d8cf4b1b849a443cd236c0ec194ead6390f4b0671cdb008d0558e252b91","votes":143533,"confirmedVoteCount":143533,"approval":98.36,"location":{"lat":48.864716,"long":2.349014}}]`),
            count: 10,    
        }));
    }

    @action
    async getDelegatesInfo(): Promise<Response<RawDelegatesInfo>> {
        // return this.socket.emit('GET_DELEGATES_INFO', {});
        console.log('GET_DELEGATES_INFO');
        return Promise.resolve().then(() => new RawDelegatesInfo({
            allCount: 128,
            activeCount: 128,
            standbyCount: 128,
            voteThreshold: 178,
            voteFreeztime: 604800000,
            stakeFreeztime: 14515200000
        }));
    }
}
