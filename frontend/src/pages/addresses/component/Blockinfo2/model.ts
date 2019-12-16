import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class Blockinfo2Model  {

    @observable Amount: string = '6.07.19 / 02:26 PM ';
    @observable TrnType: number = 332.6135;


    
}
