import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class BlockAllInfo4Model  {

    @observable Blockheight: string = '139 523 213';


    
}
