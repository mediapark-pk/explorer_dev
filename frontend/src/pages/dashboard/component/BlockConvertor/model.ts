import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Convertor } from 'src/core/model/Convertor';
import ConvertorRepository from 'src/pages/dashboard/repository/ConvertorRepository';
import { observable } from 'mobx';

@singleton
export default class BlockConvertorModel  {

    @observable dataProvider: DataProvider<Convertor>;

    constructor(
        convertorRepository: ConvertorRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: convertorRepository
    });
                    
    }

    
}
