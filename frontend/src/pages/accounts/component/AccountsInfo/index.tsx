import React from 'react';
import { useStyles } from 'src/pages/accounts/component/AccountsInfo/style';
import { observer } from 'mobx-react-lite';
import AccountBlockchainInfo from 'src/pages/accounts/component/AccountBlockchainInfo';
import RichList from 'src/pages/accounts/component/RichList';

interface IAccountsInfoProps {
}

const AccountsInfo: React.FC<IAccountsInfoProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <RichList/>
            <AccountBlockchainInfo/>
        </div>
    );
};

export default observer(AccountsInfo);
