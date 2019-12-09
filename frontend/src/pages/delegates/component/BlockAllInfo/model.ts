import { observable } from 'mobx';
import { singleton } from 'src/core/di';

@singleton
export default class BlockAllInfoModel  {

    @observable Blockheight: string = '195 012';


    
}
