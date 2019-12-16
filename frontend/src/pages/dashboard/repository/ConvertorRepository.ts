import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Convertor } from 'src/core/model/Convertor';

@transient
export default class ConvertorRepository implements IDataRepository<Convertor> {

    @observable data: Array<Convertor> = 
    [
        {

        },
        {

        },
        {

        },
        {

        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
