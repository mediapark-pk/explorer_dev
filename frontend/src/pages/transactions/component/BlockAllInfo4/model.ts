import { observable } from 'mobx';
import { singleton } from 'src/core/di';

@singleton
export default class BlockAllInfo4Model  {

    @observable Blockheight: string = '139 523 213';


    
}
