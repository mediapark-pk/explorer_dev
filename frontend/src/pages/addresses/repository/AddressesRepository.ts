import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Account } from 'src/core/model/Account';

@transient
export default class AddressesRepository implements IDataRepository<Account> {

    @observable data: Array<Account> =
    [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
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
