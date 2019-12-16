import React from 'react';
import { useStyles } from 'src/pages/transaction/component/PageTitle11/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import PageTitle11Model from 'src/pages/transaction/component/PageTitle11/model';
import Typography from '@material-ui/core/Typography';
import ButtonAddToFav3 from 'src/pages/transaction/component/ButtonAddToFav3';

interface IPageTitle11Props {
}

const PageTitle11: React.FC<IPageTitle11Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle11Model);

    return (
        <div className={classes.root} >
            <div className={classes.custom1831091} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1MjlMMjQgMC41NzA0MzVMMiAxMi42NTI5TTQ2IDEyLjY1MjlMMjQgMjQuNzM1M000NiAxMi42NTI5VjM2LjYwOTlMMjQgNDguNTcwNE0yIDEyLjY1MjlMMjQgMjQuNzM1M00yIDEyLjY1MjlMMiAzNi42MDk5TDI0IDQ4LjU3MDRNMjQgMjQuNzM1M1Y0OC41NzA0IiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Transaction
            </Typography>
            <Typography className={classes.typography1} >
                c42419b8562433666755109d9ebd8c8bd1017b147ddf0620f4160287c3c5e2ba
            </Typography>
            <div className={classes.custom1831094} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <ButtonAddToFav3 />
        </div>
    );
};

export default observer(PageTitle11);



