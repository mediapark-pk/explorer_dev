import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class BlockAllInfo5Model  {

    @observable Blockheight: string = '195 012';


    
}
