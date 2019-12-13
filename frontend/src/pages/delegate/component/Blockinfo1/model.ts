import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class Blockinfo1Model  {

    @observable SenderId: number = 4009519763706676700;
    @observable TrnType: number = 332.6135;
    @observable fee: string = '12 434';
    @observable Amount: string = '12 434';


    
}
