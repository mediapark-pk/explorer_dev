import React from 'react';
import { useStyles } from 'src/pages/delegates/component/CommonInfo/style';
import CommonInfoModel from 'src/pages/delegates/component/CommonInfo/model';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface ICommonInfoProps {}

const CommonInfo: React.FC<ICommonInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(CommonInfoModel);

    return (
        <Grid container wrap='nowrap' className={classes.root} >
            <Grid container spacing={7} direction='column' >
                <Grid item >
                    <Typography className={classes.title} >
                        All delegates
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.allCount}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography className={classes.title} >
                        Standby Delegate
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.standbyCount}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography className={classes.title} >
                        Vote freeztime
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.voteFreeztime.humanize()}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={7} direction='column' >
                <Grid item >
                    <Typography className={classes.title} >
                        Active delegates
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.activeCount}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography className={classes.title} >
                        Vote threshold
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.voteThreshold}
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography className={classes.title} >
                        Stake freeztime
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.stakeFreeztime.humanize()}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default observer(CommonInfo);
