import React from 'react';
import { useStyles } from 'src/pages/address/backlog/ButtonAddToFav2/style';
import Typography from '@material-ui/core/Typography';

interface IButtonAddToFav2Props {
}

const ButtonAddToFav2: React.FC<IButtonAddToFav2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Typography className={classes.typography} >
                Add to favorites
            </Typography>
            <div className={classes.baselineFavoriteBorder24px} >
                <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgM0MxNC43NiAzIDEzLjA5IDMuODEgMTIgNS4wOUMxMC45MSAzLjgxIDkuMjQgMyA3LjUgM0M0LjQyIDMgMiA1LjQyIDIgOC41QzIgMTIuMjggNS40IDE1LjM2IDEwLjU1IDIwLjA0TDEyIDIxLjM1TDEzLjQ1IDIwLjAzQzE4LjYgMTUuMzYgMjIgMTIuMjggMjIgOC41QzIyIDUuNDIgMTkuNTggMyAxNi41IDNaTTEyLjEgMTguNTVMMTIgMTguNjVMMTEuOSAxOC41NUM3LjE0IDE0LjI0IDQgMTEuMzkgNCA4LjVDNCA2LjUgNS41IDUgNy41IDVDOS4wNCA1IDEwLjU0IDUuOTkgMTEuMDcgNy4zNkgxMi45NEMxMy40NiA1Ljk5IDE0Ljk2IDUgMTYuNSA1QzE4LjUgNSAyMCA2LjUgMjAgOC41QzIwIDExLjM5IDE2Ljg2IDE0LjI0IDEyLjEgMTguNTVaIiBmaWxsPSIjM0Q5MEUzIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4K'/>
            </div>
        </div>
    );
};

export default ButtonAddToFav2;



