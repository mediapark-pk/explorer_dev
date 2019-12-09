import React from 'react';
import { useStyles } from 'src/pages/block/component/PageTitle13/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle13Model from 'src/pages/block/component/PageTitle13/model';
import Typography from '@material-ui/core/Typography';
import ButtonAddToFav4 from 'src/pages/block/component/ButtonAddToFav4';

interface IPageTitle13Props {
}

const PageTitle13: React.FC<IPageTitle13Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle13Model);

    return (
        <div className={classes.root} >
            <div className={classes.custom1582309} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1MjlMMjQgMC41NzA0MzVMMS45OTk5OSAxMi42NTI5TTQ2IDEyLjY1MjlMMjQgMjQuNzM1M000NiAxMi42NTI5VjM2LjYwOTlMMjQgNDguNTcwNE0xLjk5OTk5IDEyLjY1MjlMMjQgMjQuNzM1M00xLjk5OTk5IDEyLjY1MjlMMS45OTk5OCAzNi42MDk5TDI0IDQ4LjU3MDRNMjQgMjQuNzM1M1Y0OC41NzA0IiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Block
            </Typography>
            <div className={classes.custom1582305} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMEwxMy40IDE4LjZMNy44IDEzTDIwIDEzTDIwIDExTDcuOCAxMUwxMy40IDUuNEwxMiA0TDQgMTJMMTIgMjBaIiBmaWxsPSIjM0Q5MEUzIi8+Cjwvc3ZnPgo='/>
            </div>
            <Typography className={classes.typography1} >
                #242821
            </Typography>
            <div className={classes.custom1582301} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA0TDEwLjYgNS40TDE2LjIgMTFINFYxM0gxNi4yTDEwLjYgMTguNkwxMiAyMEwyMCAxMkwxMiA0WiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <ButtonAddToFav4 />
        </div>
    );
};

export default observer(PageTitle13);



