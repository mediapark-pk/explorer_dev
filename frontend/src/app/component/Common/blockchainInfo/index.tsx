import React from 'react';
import { useStyles } from 'src/app/component/Common/blockchainInfo/style';
import Typography from '@material-ui/core/Typography';


interface IBlockchainInfoProps {
        value: string | number;
        titleInfo: string;
        postfix?: string;
}

const BlockchainInfo: React.FC<IBlockchainInfoProps> = ({ titleInfo, value}) => {
    const classes = useStyles({});

    return (
        <div className={classes.blockchainInfo}>
            <Typography className={classes.blockchainInfoTitle}>
                {titleInfo}
            </Typography>
            <Typography>
                {value}
            </Typography>
        </div>
    );
};

export default BlockchainInfo;
