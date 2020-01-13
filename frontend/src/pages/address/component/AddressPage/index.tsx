import React from 'react';
import { useStyles } from 'src/pages/address/component/AddressPage/style';
import PageTitle from 'src/pages/address/component/PageTitle';
import AddressBlockchainInfo from 'src/pages/address/component/AddressBlockchainInfo';
import { useDI } from '@app/core';
import AddressPageModel from 'src/pages/address/component/AddressPage/model';
import { observer } from 'mobx-react-lite';
import AddressTable from 'src/pages/address/component/AddressTable';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { useParams } from 'react-router';

interface IAddressPageProps {

}

const AddressPage: React.FC<IAddressPageProps> = ({}) => {
    const classes = useStyles({});
    const { address } = useParams<{ address?: string }>();
    const model = useDI(AddressPageModel);

    React.useEffect(() => {
        if (address) {
            model.loadAccount(address);
        }
    }, [address]);

    if (model.isLoading) {
        return (
            <div className={classes.loading}>
                <CircularProgress size={72}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <PageTitle headline='Address'>{model.account.address}</PageTitle>
            <AddressBlockchainInfo account={model.account}/>
            <AddressTable/>
        </div>
    );
};

export default observer(AddressPage);
