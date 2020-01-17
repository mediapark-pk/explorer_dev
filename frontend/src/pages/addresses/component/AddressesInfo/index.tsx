import React from 'react';
import { useStyles } from 'src/pages/addresses/component/AddressesInfo/style';
import { observer } from 'mobx-react-lite';
import AddressesBlockchainInfo from 'src/pages/addresses/component/AccountBlockchainInfo';
import RichList from 'src/pages/addresses/component/RichList';

interface IAddressesInfoProps {
}

const AddressesInfo: React.FC<IAddressesInfoProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <RichList/>
            <AddressesBlockchainInfo/>
        </div>
    );
};

export default observer(AddressesInfo);
