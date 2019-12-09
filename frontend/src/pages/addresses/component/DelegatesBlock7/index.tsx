import React from 'react';
import { useStyles } from 'src/pages/addresses/component/DelegatesBlock7/style';
import Typography from '@material-ui/core/Typography';

interface IDelegatesBlock7Props {
}

const DelegatesBlock7: React.FC<IDelegatesBlock7Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.custom25123027} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1MjlMMjQgMC41NzA0MzVMMiAxMi42NTI5TTQ2IDEyLjY1MjlMMjQgMjQuNzM1M000NiAxMi42NTI5VjM2LjYwOTlMMjQgNDguNTcwNE0yIDEyLjY1MjlMMjQgMjQuNzM1M00yIDEyLjY1MjlMMiAzNi42MDk5TDI0IDQ4LjU3MDRNMjQgMjQuNzM1M1Y0OC41NzA0IiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Bloks
            </Typography>
            <Typography className={classes.typography1} >
                (1)
            </Typography>
        </div>
    );
};

export default DelegatesBlock7;



