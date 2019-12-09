import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockDDK/style';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

interface IBlockDDKProps {
}

const BlockDDK: React.FC<IBlockDDKProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                DDK
            </Typography>
            <TextField className={classes.textField} >
                <Typography className={classes.typography1} >
                    1
                </Typography>
                <div className={classes.line} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQ4IiBoZWlnaHQ9IjEiIHZpZXdCb3g9IjAgMCAyNDggMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjAuNSIgeDI9IjI0OCIgeTI9IjAuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K'/>
                </div>
            </TextField>
        </div>
    );
};

export default BlockDDK;



