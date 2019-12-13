import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class BlockBasicInfModel  {

    @observable totalsupply: string = '45 000 000 DDK';
    @observable MarketCap: string = '2 850 407 $';
    @observable totalstakeholders: string = '188 509 ';
    @observable Circulatingsupply: string = '4 103 397.3536';
    @observable Coinholders: string = '201 305';
    @observable Totalstaked: string = '1 869 208.075';


    
}
