import { observable } from 'mobx';
import { singleton } from 'src/core/di';

@singleton
export default class BlockInfoModel  {

    @observable blockId: number = 12929352618515067000;
    @observable generatorName: string = 'TDALLIANCE1';
    @observable createdAt: string = '6.07.19 / 02:26 PM ';
    @observable volume: number = 13.952;
    @observable fee: string = '0.310';


    
}
