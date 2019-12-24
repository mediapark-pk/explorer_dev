import React from 'react';
import { useStyles } from 'src/pages/addresses/component/RichList/style';
import { observer } from 'mobx-react-lite';
import RichListItem from 'src/pages/addresses/component/RichList/RichListItem';
import Typography from '@material-ui/core/Typography';

interface IRichListProps {

}

const RichList: React.FC<IRichListProps> = ({}) => {
    const classes = useStyles({});

    const foundationAccounts = [
        {
            titleInfo: 'Exchanger Reserved',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Founder Allocation',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Advisor Allocation',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Contributor Allocation',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Team Allocation',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Bounty Allocation',
            address: '4009519763706676860',
        },
    ];

    const unspentAccounts = [
        {
            titleInfo: 'Unspent Address',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Stake Allocation',
            address: '4009519763706676860',
        },
        {
            titleInfo: 'Airdrop Allocation',
            address: '4009519763706676860',
        },
    ];

    return (
        <div className={classes.root}>
            <div className={classes.div}>
                <Typography variant={'h6'}>
                    DDK Foundation Allocation
                </Typography>
                {foundationAccounts.map((item, index) => (
                    <div key={index}>
                        <RichListItem titleInfo={item.titleInfo} address={item.address}/>
                    </div>
                ))}
            </div>
            <div className={classes.div}>
                <Typography variant={'h6'}>
                    Unspent Address
                </Typography>
                {unspentAccounts.map((item, index) => (
                    <div key={index}>
                        <RichListItem titleInfo={item.titleInfo} address={item.address}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(RichList);
