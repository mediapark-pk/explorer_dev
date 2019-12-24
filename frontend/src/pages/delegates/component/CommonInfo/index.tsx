import React from 'react';
import { useStyles } from 'src/pages/delegates/component/CommonInfo/style';
import CommonInfoModel from 'src/pages/delegates/component/CommonInfo/model';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import { Typography } from '@material-ui/core';

interface ICommonInfoProps {}

const CommonInfo: React.FC<ICommonInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(CommonInfoModel);

    return (
        <div className={classes.root} >
            <div className={classes.leftSide} >
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        All delegates
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.allCount}
                    </Typography>
                </div>
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        Standby Delegate
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.standbyCount}
                    </Typography>
                </div>
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        Vote freeztime
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.voteFreeztime.humanize()}
                    </Typography>
                </div>
            </div>
            <div className={classes.rightSide} >
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        Active delegates
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.activeCount}
                    </Typography>
                </div>
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        Vote threshold
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.voteThreshold}
                    </Typography>
                </div>
                <div className={classes.infoBlock}>
                    <Typography className={classes.title} >
                        Stake freeztime
                    </Typography>
                    <Typography className={classes.value} >
                        {model.delegatesInfo.stakeFreeztime.humanize()}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default observer(CommonInfo);
