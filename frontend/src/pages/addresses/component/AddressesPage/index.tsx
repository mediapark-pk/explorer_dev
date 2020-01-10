import React from 'react';
import { useStyles } from 'src/pages/addresses/component/AddressesPage/style';
import PageTitle from 'src/pages/addresses/component/PageTitle';
import AddressesInfo from 'src/pages/addresses/component/AddressesInfo';
import AddressesTable from 'src/pages/addresses/component/AddressesTable';
import AddressesPageModel from 'src/pages/addresses/component/AddressesPage/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IAddressesPageProps {
}

const AddressesPage: React.FC<IAddressesPageProps> = ({ }) => {
    const classes = useStyles({});
    const addressesPageModel = useDI(AddressesPageModel);

    return (
        <div className={classes.root} >
            <PageTitle/>
            <AddressesInfo/>
            <AddressesTable dataProvider={addressesPageModel.dataProvider}/>
        </div>
    );
};

export default observer(AddressesPage);
