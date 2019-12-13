import { observable } from 'mobx';
import { singleton } from 'src/container';

@singleton
export default class BlockAllInfoModel  {

    @observable Blockheight: string = '195 012';


    
}
