import Socket from 'src/core/api/socket/Socket';
import { singleton } from 'src/container';
import { Request, Response } from '@app/web';
import { RawDelegateInfo } from 'src/core/model/RawDelegateInfo';
import { RawBlock } from 'src/core/model/RawBlock';
import { RawVote } from 'src/core/model/RawVote';
import { delay } from 'src/util';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { RawBalanceVolume } from 'src/core/model/RawBalanceVolume';

type IListResponse<T> = {
    data: T[];
    count: number;
};

const createMock = (i: number = 0): RawDelegateInfo => ({
    address: '4009519763706676860',
    blockHeight: 12434 + i,
    consensus: true,
    ddkVersion: '12434',
    feeReward: 332.6135,
    forgedBlocks: 12434,
    location: 'China',
    missedBlocks: 12434,
    peers: 12434,
    uptime: 98.341,
    votes: 12434,
    username: 'TDALLIANCE1',
});

const createBalanceVolumeMock = () => {
    const mockData: RawBalanceVolume[] = [];
    for (let i = 0; i < 500; i++) {
        mockData.push({
            t: Date.now() + i*200000000,
            y: Math.abs((i>0 ? mockData[i-1].y : 20) + Math.random()*2 - 1)
        });
    }
    return mockData;
};

@singleton
export default class DelegateService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getDelegateInfo(request: Request): Promise<Response<RawDelegateInfo>> {
        // return this.socket.emit('GET_DELEGATE_INFO', request);
        console.log('GET_DELEGATE_INFO');
        await delay();
        return Promise.resolve().then(() => createMock());
    }

    async getForgedBlocks(request: Request): Promise<IListResponse<RawBlock>> {
        // return this.socket.emit('GET_FORGED_BLOCKS', request);
        console.log('GET_FORGED_BLOCKS', request);
        return Promise.resolve().then(() => ({
            data: JSON.parse(`[{"id":"3ad653d7e69839fef5f885544113b1db033eafdccbc400cd5a7fd0b9ea857b22","version":1,"createdAt":1577198390000,"height":1393067,"previousBlockId":"637374776d5b2995f2f65c8a8ba00d37ee49eca77c7826df512595e10dc1132a","transactionCount":3,"amount":0,"fee":160000,"payloadHash":"7206e5e71956a251326dda0ca5ba4b75c60e82442714ce4624ac6fa93cd11aca","generatorPublicKey":"c9c0e384663852da05c25ba479f7c1f20a1713798fe47fd85472881acba24d80","signature":"7b9a97d67a0bfb25c444573bbfa4a8dc1dcaba51f1b709ac6534863275605830db7eb8753626f00fa99b8ead5f30c3ffe4afcc5babc6150d3af471bc7c63ea00","relay":1,"generationTime":10000},{"id":"637374776d5b2995f2f65c8a8ba00d37ee49eca77c7826df512595e10dc1132a","version":1,"createdAt":1577198380000,"height":1393066,"previousBlockId":"89c197023d905e55461a9df13e0422d41450af94be962557a3d501528a981776","transactionCount":4,"amount":29000000,"fee":1372900,"payloadHash":"a025f31098b97cfdf92f3d5041cf320a4aa00aac05d27910feab4b270e4cb226","generatorPublicKey":"64894ce4d6d075b21a11d1d255491b3fd4d8deea2546fde5b29c495475f7fe16","signature":"13cb9c4253932b06a6c0283a0a7bc1ca93ba5d0d7687cd58f2fdc0108d1b972d69b70c8bda0276dd88a69cb5251d0811a64cd954f32d5a1ab134e5f3c4d7610f","relay":1,"generationTime":10000},{"id":"89c197023d905e55461a9df13e0422d41450af94be962557a3d501528a981776","version":1,"createdAt":1577198370000,"height":1393065,"previousBlockId":"d4591d9a9ae006d82a5e63554cbf1b448ee9945558c499b8f15f062f7eb306ef","transactionCount":7,"amount":400000000,"fee":1130000,"payloadHash":"7c16a2af13792f25147879670a3d48facf0252d9d849031f0434d3ae0197db19","generatorPublicKey":"0c03aab7c664356199889839360fc9361a290e47d9ee59ef7401dc63bc0d17f2","signature":"4695fc8e02f43b5f1b957502f123bbd798ede423c702fe397a58d6354ed3bfa5a7f19cca3d36f6bf098880fbe76b26c2bdfaf741a300b1568e8aeb83ec3b920a","relay":2,"generationTime":10000},{"id":"d4591d9a9ae006d82a5e63554cbf1b448ee9945558c499b8f15f062f7eb306ef","version":1,"createdAt":1577198360000,"height":1393064,"previousBlockId":"97458e98d7338db73d24176df9d4423763309faf6d2aa9c4e2f8a15e5ee81164","transactionCount":3,"amount":1000000,"fee":20100,"payloadHash":"63f4a6c70391233cf4e1a7848f6c46b7f159b416c2bc4c5f974bef233ded36fd","generatorPublicKey":"e20ff2b68ddac1d2b912031b381431f92fdae3c5036300b1bbe3ebde0e1f7a32","signature":"4755f501d0ec12b864b8f2e83c00deb2986f87d7d10b809466ae731657cecaacf93bf7ef7efa40aa3ef83f8809e767dbfe998cafad5a2a8e15335ea88fb71f06","relay":2,"generationTime":10000},{"id":"97458e98d7338db73d24176df9d4423763309faf6d2aa9c4e2f8a15e5ee81164","version":1,"createdAt":1577198350000,"height":1393063,"previousBlockId":"4e68365f402bc8e0d1417b89eb0e81bb2584ef24d3e5deefedda3a6faa69f66c","transactionCount":4,"amount":0,"fee":590000,"payloadHash":"89c908da5ae80b1e03291208175d1fe41e22097e27e0e6e4dcef7eed3543aa33","generatorPublicKey":"2432531ba2ed00f673d7742bf3894bf31ef80cc2253c4347e4450a30f8bba06f","signature":"6dce84644ef07fcbc6481f9af296b11b8b28b043724151b8a2223d9134da4276635f3998ac43c30d658486d8c16b96b865ebf4d52df70dc75024bfae1f809a04","relay":2,"generationTime":10000},{"id":"4e68365f402bc8e0d1417b89eb0e81bb2584ef24d3e5deefedda3a6faa69f66c","version":1,"createdAt":1577198340000,"height":1393062,"previousBlockId":"addc992f74ac25702fa41839332380a9cd173bf25e84e9dfba2a225cd6e3ecb9","transactionCount":2,"amount":0,"fee":1190000,"payloadHash":"56d2137b0939193222fce1e13956dcc46cad9ea20d53fb4b758ebc0c3f91f2a3","generatorPublicKey":"adf9c93dbdf3281df669ebf41d1c7055f65b4e473dbe61ca40963d37c0fa015e","signature":"464218dfff6a1fe58a00e0a48538268e9810ed3364dedb9b7611b87767149bf9d190347e2f8682c1decfa980d396dbf4624bd79528aa58dc26bfc8ae04a2a40e","relay":2,"generationTime":10000},{"id":"addc992f74ac25702fa41839332380a9cd173bf25e84e9dfba2a225cd6e3ecb9","version":1,"createdAt":1577198330000,"height":1393061,"previousBlockId":"3dc2f691d857d4907c4616754ab4b2ba237f5030c0b5734d7a396a2ad098d51d","transactionCount":4,"amount":0,"fee":1080000,"payloadHash":"d388bd97ae24e3f43349b285815a29cafcc3ed6db24ec20db9e9cdc11f592783","generatorPublicKey":"3f0348b6d3ecaeaeca0a05ee4c2d7b4b7895ef0a12d8023ba245b6b8022833e5","signature":"769d547dfb7f13474a919fc69d7f87c6f81eb67635d3912382be9263f2080c775e6fa4e1ec59a74480acb88423ca9a93e033ffab69de666f13f0bffdcefe9107","relay":2,"generationTime":10000},{"id":"3dc2f691d857d4907c4616754ab4b2ba237f5030c0b5734d7a396a2ad098d51d","version":1,"createdAt":1577198320000,"height":1393060,"previousBlockId":"8d6bca9b1bc63dd4266c65ab91d7d3dfdb42afcf935246b03ecdcf39b11e5fc5","transactionCount":4,"amount":6900000,"fee":341802,"payloadHash":"dc5c5f5ad77fff3c4b4402261fae9c906c8195a92222474038c08b5267d7bc44","generatorPublicKey":"870163d6cd3fe669a136ee399583849d0b469715d3bf3615c4a28a8c5979a262","signature":"964fe1fa37b63577b813433a2a047a3a892bbdea6a1bf8e2ad7e154441112398167bad7eb5f5836541dfc34a6f91e117fad22d1ae490b2e4b98e6b18251b8a0c","relay":1,"generationTime":10000},{"id":"8d6bca9b1bc63dd4266c65ab91d7d3dfdb42afcf935246b03ecdcf39b11e5fc5","version":1,"createdAt":1577198310000,"height":1393059,"previousBlockId":"d3d65c17ff400285066fe1b56f4b6ccb630599b16811f39b1651ae1207b8bd82","transactionCount":4,"amount":19000000,"fee":201900,"payloadHash":"7db7eccbec1b5b0bc4639a3b15d7f527504f1b954fc6b83a64d72051da53a131","generatorPublicKey":"15ff3fe5e20331c957cfc99d1417c7965821c336e7d8773854f7beacce05df02","signature":"abcedbdee0abb537828c611e19309922ba1c450fcb54a5ff933cf90bf4c754baa4ed872920d61ce978deeee8b04a3a6ec74ccec7ed83e5c433896f299b3bc607","relay":3,"generationTime":10000},{"id":"d3d65c17ff400285066fe1b56f4b6ccb630599b16811f39b1651ae1207b8bd82","version":1,"createdAt":1577198300000,"height":1393058,"previousBlockId":"cb0684986b3c65b608734af7d9752ae613a68f67d791d5b7ab965c0d18068d08","transactionCount":20,"amount":455000000,"fee":3125500,"payloadHash":"0cd4151194efd56aa40efb4e8966924716dff48426b6dffa0c4b636f4d6a3174","generatorPublicKey":"773b019c7d25e7bb751295bcc50d43f069c87da65395a5fbb77ccb89d2913661","signature":"73e60fe32b0960bade453423e89bdac4f2395592bcc2dfdf1aaed074bc204da226df94b6f5731c405ac605a27438c30735e88378d9d8bfe303930963e5e11a0e","relay":1,"generationTime":50000},{"id":"cb0684986b3c65b608734af7d9752ae613a68f67d791d5b7ab965c0d18068d08","version":1,"createdAt":1577198250000,"height":1393057,"previousBlockId":"8a4ceccaaa33d675b4947c394ed200eefa6b8ce55b0eaeb141b65eda7f3c04da","transactionCount":3,"amount":0,"fee":910000,"payloadHash":"65eafbf388be2e16555a0a640031aa88c355833c82600714acd1a3760623aa9d","generatorPublicKey":"96fe19bc56224ecb491a5299abb9a958af7746b4cb74e016712bab873061ca9c","signature":"40c975b4194f8ab98a9b286095ecfea40cd253e550ea1076d9ef5e3d8751a744a647f5b2c50c109c424b29353b7ff49b6a29959b7305d1d152ced6f951cfee0e","relay":2}]`),
            count: 10,    
        }));
    }

    async getVotes(request: Request): Promise<IListResponse<RawVote>> {
        // return this.socket.emit('GET_VOTES', request);
        console.log('GET_VOTES', request);
        return Promise.resolve().then(() => ({
            data: JSON.parse(`[{"id":"eD1hbH4mQ4","blockId":"QwBJ7czRNd","senderId":"oRB90MAtcG","createdAt":1577205426587,"fee":"0.08816"},{"id":"D79XC8fQ7e","blockId":"eFDs713rtA","senderId":"gkG8CCRWXT","createdAt":1577205378319,"fee":"0.05062"},{"id":"hdv9Abg97s","blockId":"eoU199ZN34","senderId":"crlx9GhnQM","createdAt":1577205430985,"fee":"0.07390"},{"id":"ljasBPUgSV","blockId":"GrEuWxfrko","senderId":"glxY8EhftR","createdAt":1577205472117,"fee":"0.00474"},{"id":"fllcV3gVSY","blockId":"ThYYndXQUe","senderId":"C6OqdUkwHm","createdAt":1577205432414,"fee":"0.08282"},{"id":"nJQo9KHW2F","blockId":"vwc71YPQ83","senderId":"TXiImWbNub","createdAt":1577205378322,"fee":"0.04060"},{"id":"RRCte6PRt1","blockId":"FGXXgrDF8K","senderId":"I4S8rWWwKA","createdAt":1577205430611,"fee":"0.09361"},{"id":"9g0jYFEOxf","blockId":"cZD3cmHrQC","senderId":"hBXwMbKcAn","createdAt":1577205476067,"fee":"0.04248"},{"id":"z377d45Wot","blockId":"lOpv6Zndlk","senderId":"G8RPbD8F1I","createdAt":1577205429715,"fee":"0.00754"},{"id":"UqJhD1jC8A","blockId":"W6QlIpfhow","senderId":"4drrDmKg9c","createdAt":1577205520174,"fee":"0.04211"},{"id":"2SXxTLDmHI","blockId":"XvcPOYKdtx","senderId":"3GKMPnsK65","createdAt":1577205516145,"fee":"0.00187"},{"id":"x2ArktRf7m","blockId":"awlUdNs5sB","senderId":"a6mie7kBQ1","createdAt":1577205449285,"fee":"0.06698"},{"id":"okbW5qXZGB","blockId":"JhU967h5FN","senderId":"4O60aopdL8","createdAt":1577205390628,"fee":"0.07060"},{"id":"TeG5HO1D45","blockId":"8Ixi7NzUHT","senderId":"mdBiGFEAcw","createdAt":1577205364259,"fee":"0.09592"},{"id":"VOM6SgrH2G","blockId":"FMILC4guQI","senderId":"bJ6CUA6i4J","createdAt":1577205415265,"fee":"0.07185"},{"id":"WqR9bQByBd","blockId":"iL63jgQ2sx","senderId":"azAoppjgkL","createdAt":1577205362163,"fee":"0.03403"},{"id":"rTOx2HdRZi","blockId":"oxaGOIC6QO","senderId":"BZuL6r36n8","createdAt":1577205366047,"fee":"0.07613"},{"id":"dmRdRmrr2n","blockId":"7HSVSf6VIn","senderId":"ziA4lHSnIZ","createdAt":1577205512430,"fee":"0.06184"},{"id":"TQNN93yaXM","blockId":"MXXtS1iSq0","senderId":"u56InYAxoV","createdAt":1577205426087,"fee":"0.06965"},{"id":"Rwd11Ro9yB","blockId":"8kpQtBgNFO","senderId":"wkTXqAYFTX","createdAt":1577205429715,"fee":"0.00654"},{"id":"kGjBA6LY75","blockId":"0YeLkaLzPg","senderId":"XWBkMbWWcb","createdAt":1577205397605,"fee":"0.09880"},{"id":"KgwRR5oxJK","blockId":"OeZwFZ0fcE","senderId":"eNe620ctFP","createdAt":1577205423003,"fee":"0.09789"},{"id":"CFRF4Dtswu","blockId":"S4QpKJ57Vu","senderId":"qTTC2YBITi","createdAt":1577205462052,"fee":"0.04235"},{"id":"Y6tFRIpaWT","blockId":"z0SCAGdJ3F","senderId":"5rQBCyyPsQ","createdAt":1577205531209,"fee":"0.05975"},{"id":"mlsy6nLra9","blockId":"yDmKZFtFZm","senderId":"JfK8z7PFf8","createdAt":1577205472215,"fee":"0.08968"},{"id":"U4vkroSdk1","blockId":"et55BabZRz","senderId":"DBo3Ewe2fv","createdAt":1577205509862,"fee":"0.03015"},{"id":"7chtGVvAOP","blockId":"JrSiWPtCWw","senderId":"nUB6msGGZH","createdAt":1577205526616,"fee":"0.09701"},{"id":"iyXEw4yykV","blockId":"uivB6pDMEc","senderId":"0FbQ3VJl6n","createdAt":1577205371049,"fee":"0.03837"},{"id":"hV58dK1ub9","blockId":"ZClyfDQjM4","senderId":"k7olsf29W4","createdAt":1577205523355,"fee":"0.01935"},{"id":"QXe7lGBQRx","blockId":"reE9byhIUP","senderId":"ZLKiIZ6cm0","createdAt":1577205481780,"fee":"0.06441"},{"id":"THFMQdf0EO","blockId":"tI5XZYmJO9","senderId":"yH0ZRJUPBo","createdAt":1577205413424,"fee":"0.04669"},{"id":"U6JawfjAjU","blockId":"ehuhgqQJB9","senderId":"uUCoNBRsJH","createdAt":1577205451253,"fee":"0.07520"},{"id":"Kw3wJMwHxS","blockId":"WqfD4Dammb","senderId":"OuOWbJMH3u","createdAt":1577205416485,"fee":"0.02226"},{"id":"JW9dXXw6nM","blockId":"nSmDMzNwjU","senderId":"co559xLhDn","createdAt":1577205373343,"fee":"0.03254"},{"id":"9KXTM3Go3a","blockId":"j5ZPK07Ssy","senderId":"AklLows7Yn","createdAt":1577205485770,"fee":"0.06858"},{"id":"4uAhIbiogy","blockId":"HnZoZmOzZr","senderId":"rYgapbZaOO","createdAt":1577205423340,"fee":"0.05055"},{"id":"Ery85DR2Pn","blockId":"9z5iGeRY4S","senderId":"folw3vNVUl","createdAt":1577205383338,"fee":"0.03043"},{"id":"TEn2HRWVxz","blockId":"anJkMceRfO","senderId":"51qiZRaPJg","createdAt":1577205500959,"fee":"0.04233"},{"id":"Qm2QElXfuL","blockId":"J1cKZK49vX","senderId":"Wer2ikuN6x","createdAt":1577205391065,"fee":"0.02491"},{"id":"nYeDwoNAx4","blockId":"Ry0K1e8sNG","senderId":"ldDX7jrGh4","createdAt":1577205532311,"fee":"0.01427"},{"id":"AarP5hoe5E","blockId":"UGaesPay7z","senderId":"z4VLSxLwfZ","createdAt":1577205519733,"fee":"0.09878"},{"id":"x8nunsSdN3","blockId":"VdeWnDwrfY","senderId":"74vK6UelFA","createdAt":1577205486844,"fee":"0.03403"},{"id":"Y6pFS9VdH0","blockId":"2GJgYXsS1v","senderId":"afMP9hlQIf","createdAt":1577205522123,"fee":"0.00044"},{"id":"RcfrqSV9wh","blockId":"m7HrjZjyTw","senderId":"S2gyD4dwT5","createdAt":1577205475275,"fee":"0.08124"},{"id":"inoQK6Eq8L","blockId":"CKAWreciI2","senderId":"MhnW93nTEG","createdAt":1577205430988,"fee":"0.08989"},{"id":"0km1auydln","blockId":"QajEGMFuWa","senderId":"T9qqHKRGRt","createdAt":1577205378763,"fee":"0.08206"},{"id":"qDzQwaXLUO","blockId":"kYiXyUZRFP","senderId":"Ej36FTXQbL","createdAt":1577205363895,"fee":"0.04475"},{"id":"lKMiKtR6AR","blockId":"ud6mBqat5r","senderId":"aoIMTepnMC","createdAt":1577205378502,"fee":"0.04113"},{"id":"2hISk2ae5r","blockId":"lcpEihuAQ3","senderId":"UxNFk3VkPO","createdAt":1577205450929,"fee":"0.05396"},{"id":"46VsPM6wbi","blockId":"Uuai2hJiXX","senderId":"c47zS3sO99","createdAt":1577205414973,"fee":"0.05101"}]`).slice(request.pagination.offset, request.pagination.offset + request.pagination.limit),
            count: 50,    
        }));
    }

    async addToFavorites(request: Request) {
        // return this.socket.emit('GET_VOTES', request);
        console.log('ADD_TO_FAVORITES', request);
        return Promise.resolve();
    }

    async getBalanceVolume(request: Request): Promise<IListResponse<RawBalanceVolume>> {
        // return this.socket.emit('GET_DELEGATE_INFO', request);
        console.log('GET_BALANCE_VOLUME', request);
        await delay();
        return {
            data: createBalanceVolumeMock(),
            count: 500
        };
    }

    onDelegateUpdate(): Observable<Response<RawDelegateInfo>> {
        let i = 0;

        return interval(5000)
            .pipe(
                map(() => {
                    const mock = createMock(i++);
                    console.log('DELEGATE_INFO_UPDATED', mock);
                    return mock;
                })
            );
    }
}
