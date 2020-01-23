import React from 'react';
import { useStyles } from 'src/pages/delegate/component/CommonInfo/style';
import { Typography, Button, Grid } from '@material-ui/core';
import { FilterNone as FilterNoneIcon } from '@material-ui/icons';
import { useDI } from '@app/core';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { observer } from 'mobx-react-lite';
import { QRModalIcon } from 'src/popups/QRModal';

interface ICommonInfoProps {}

const CommonInfo: React.FC<ICommonInfoProps> = ({}) => {
    const classes = useStyles({});
    const model = useDI(MainPageModel);

    return (
        <Grid container className={classes.root} >
            <Grid container item xs={6} spacing={7} direction='column'>
                <Grid xs item >
                    <Typography className={classes.label} >
                        Address
                    </Typography>
                    <Typography className={classes.valueLink} >
                        { model.delegateInfo.address }
                        <Button className={classes.copyIconButton} onClick={model.copyAddress} >
                            <FilterNoneIcon
                                className={classes.copyIcon}
                                onClick={model.copyAddress}
                            />
                        </Button>
                        <QRModalIcon data={ model.delegateInfo.address } />
                    </Typography>
                </Grid>
                <Grid container spacing={7} >
                    <Grid xs item >
                        <Typography className={classes.label} >
                            Uptime
                        </Typography>
                        <Typography className={classes.value} >
                            { model.delegateInfo.uptime }%
                        </Typography>
                    </Grid>
                    <Grid xs item >
                        <Typography className={classes.label} >
                            Total votes
                        </Typography>
                        <Typography className={classes.value} >
                            { model.delegateInfo.votes }
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={7} >
                    <Grid xs item >
                        <Typography className={classes.label} >
                            Total Fee reward
                        </Typography>
                        <Typography className={classes.value} >
                            { model.delegateInfo.feeReward }
                            <span className={classes.sub}>
                                DDK
                            </span>
                        </Typography>
                    </Grid>
                    <Grid xs item >
                        <Typography className={classes.label} >
                            Forged blocks
                        </Typography>
                        <Typography className={classes.value} >
                            { model.delegateInfo.forgedBlocks }
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={3} spacing={7} direction='column' >
                <Grid xs item >
                    <Typography className={classes.label} >
                        Server Location
                    </Typography>
                    <Typography className={classes.value} >
                        { model.delegateInfo.location }
                    </Typography>
                </Grid>
                <Grid xs item >
                    <Typography className={classes.label} >
                        Block height
                    </Typography>
                    <Typography className={classes.value} >
                        { model.delegateInfo.blockHeight }
                    </Typography>
                </Grid>
                <Grid xs item >
                    <Typography className={classes.label} >
                        Missed blocks
                    </Typography>
                    <Typography className={classes.value}>
                        { model.delegateInfo.missedBlocks }
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={3} spacing={7} direction='column' >
                <Grid xs item >
                    <Typography className={classes.label} >
                        Consensus
                    </Typography>
                    <Typography className={classes.value} >
                        { model.delegateInfo.consensus ? 'Yes' : 'No' }
                    </Typography>
                </Grid>
                <Grid xs item >
                    <Typography className={classes.label} >
                        Peers
                    </Typography>
                    <Typography className={classes.value} >
                        { model.delegateInfo.peers }
                    </Typography>
                </Grid>
                <Grid xs item >
                    <Typography className={classes.label} >
                        DDK Core Versions
                    </Typography>
                    <Typography className={classes.value} >
                        { model.delegateInfo.ddkVersion }
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default observer(CommonInfo);
