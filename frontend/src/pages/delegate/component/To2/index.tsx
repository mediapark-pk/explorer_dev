import React from 'react';
import { useStyles } from 'src/pages/delegate/component/To2/style';
import Typography from '@material-ui/core/Typography';

interface ITo2Props {
}

const To2: React.FC<ITo2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    To
                </Typography>
                <Typography className={classes.typography1} >
                    02.02.17
                </Typography>
            </div>
            <div className={classes.div1} >
                <div className={classes.vector21} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNjAiIGhlaWdodD0iMSIgdmlld0JveD0iMCAwIDYwIDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDAuNUg2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K'/>
                </div>
            </div>
        </div>
    );
};

export default To2;



