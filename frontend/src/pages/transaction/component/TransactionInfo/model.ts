import { observable } from 'mobx';
import { singleton } from 'src/core/di';

@singleton
export default class TransactionInfoModel  {

    @observable SenderId: number = 4009519763706676700;
    @observable Amount: number = 13.952;
    @observable recipient: number = 4009519763706676700;
    @observable dateTime: string = '6.07.19 / 02:26 PM ';
    @observable TrnType: string = 'Send';
    @observable fee: string = '0.310';
    @observable delegate: string = 'TDALLIANCE1';
    @observable blockforger: string = '2B344A2B344A2B34';


    
}
