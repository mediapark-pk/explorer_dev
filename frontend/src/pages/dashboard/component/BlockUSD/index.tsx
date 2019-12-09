import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockUSD/style';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

interface IBlockUSDProps {
}

const BlockUSD: React.FC<IBlockUSDProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    USD
                </Typography>
                <Typography className={classes.typography1} >
                    -7.76 %
                </Typography>
            </div>
            <div className={classes.div1} >
                <TextField className={classes.textField} >
                    <Typography className={classes.typography2} >
                        28.580 000 02
                    </Typography>
                    <div className={classes.line} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQ4IiBoZWlnaHQ9IjEiIHZpZXdCb3g9IjAgMCAyNDggMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjAuNSIgeDI9IjI0OCIgeTI9IjAuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K'/>
                    </div>
                </TextField>
            </div>
        </div>
    );
};

export default BlockUSD;



