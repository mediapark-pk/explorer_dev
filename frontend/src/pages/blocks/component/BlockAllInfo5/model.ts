import { observable } from 'mobx';
import { singleton } from 'src/core/di';

@singleton
export default class BlockAllInfo5Model  {

    @observable Blockheight: string = '195 012';


    
}
