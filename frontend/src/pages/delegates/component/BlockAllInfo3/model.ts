import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class BlockAllInfo3Model  {

    @observable Blockheight: string = '195 012';


    
}
