import React from 'react';
import { useStyles } from 'src/pages/addresses/component/PageTitle6/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import PageTitle6Model from 'src/pages/addresses/component/PageTitle6/model';
import Typography from '@material-ui/core/Typography';
import Group from '@material-ui/icons/Group';
import ButtonAddToFav2 from 'src/pages/addresses/component/ButtonAddToFav2';

interface IPageTitle6Props {
}

const PageTitle6: React.FC<IPageTitle6Props> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(PageTitle6Model);

    return (
        <div className={classes.root} >
            <div className={classes.custom2518508} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDMyVjM1QzEyIDM3LjIwOTEgMTMuNzkwOSAzOSAxNiAzOUg0MUM0My4yMDkxIDM5IDQ1IDM3LjIwOTEgNDUgMzVWMTRDNDUgMTEuNzkwOSA0My4yMDkxIDEwIDQxIDEwSDE2QzEzLjc5MDkgMTAgMTIgMTEuNzkwOSAxMiAxNFYxNyIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTM1IDI0QzM1IDIxLjc5MDkgMzYuNzkwOSAyMCAzOSAyMEg0NVYzMEgzOUMzNi43OTA5IDMwIDM1IDI4LjIwOTEgMzUgMjZWMjRaIiBzdHJva2U9IiMzRDkwRTMiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIyNSIgcj0iMiIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0xOSAyMEw1IDIwTTUgMjBMNy41MTg1MiAyM001IDIwTDcuNTE4NTIgMTciIHN0cm9rZT0iIzNEOTBFMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDI4SDIyTTIyIDI4TDE5LjQ4MTUgMjVNMjIgMjhMMTkuNDgxNSAzMSIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=='/>
            </div>
            <Typography className={classes.typography} >
                Address 10410042372140583386
            </Typography>
            <div className={classes.contentCopy24px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDFINEMyLjkgMSAyIDEuOSAyIDNWMTdINFYzSDE2VjFaTTE5IDVIOEM2LjkgNSA2IDUuOSA2IDdWMjFDNiAyMi4xIDYuOSAyMyA4IDIzSDE5QzIwLjEgMjMgMjEgMjIuMSAyMSAyMVY3QzIxIDUuOSAyMC4xIDUgMTkgNVpNMTkgMjFIOFY3SDE5VjIxWiIgZmlsbD0iIzNEOTBFMyIvPgo8L3N2Zz4K'/>
            </div>
            <Group className={classes.group} />
            <ButtonAddToFav2 />
        </div>
    );
};

export default observer(PageTitle6);



