import React from 'react';
import { useStyles } from 'src/pages/block/component/BlockInfo/style';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { VMBlock } from 'src/common/model/VMBlock';

interface IBlockInfoProps {
    block: VMBlock;
}

const BlockInfo: React.FC<IBlockInfoProps> = ({ block }) => {
    const classes = useStyles({});

     return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} sm={12} lg={12} xl={12}>
                    <Grid container item xs={12}>
                        <Grid item xs={6} sm={4} lg={2} xl={2}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Block ID
                                </Typography>
                                <Link className={classes.link} to={`/block/${block.id}`}>
                                    {block.id}
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={2} xl={2}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Block forger
                                </Typography>
                                <Typography>
                                    {block.generatorPublicKey}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={2} xl={2}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Date/Time
                                </Typography>
                                <Typography>
                                    {block.createdAt.humanize()}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={2} xl={2}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Amount
                                </Typography>
                                <Typography>
                                    {block.amount}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={2} xl={2}>
                            <div className={classes.transactionInfo}>
                                <Typography className={classes.transactionInfoTitle}>
                                    Fee
                                </Typography>
                                <Typography>
                                    {block.fee}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default observer(BlockInfo);
