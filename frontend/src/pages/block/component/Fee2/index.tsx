import React from 'react';
import { useStyles } from 'src/pages/block/component/Fee2/style';
import Typography from '@material-ui/core/Typography';

interface IFee2Props {
    fee?: string;
}

const Fee2: React.FC<IFee2Props> = ({ fee, }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Typography className={classes.typography} >
                        Fee
                    </Typography>
                </div>
                <div className={classes.div2} >
                    <Typography
                        className={classes.typography1}
                    >
                        { fee }
                    </Typography>
                    <Typography
                        className={classes.typography2}
                    >
                        { fee }
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Fee2;



