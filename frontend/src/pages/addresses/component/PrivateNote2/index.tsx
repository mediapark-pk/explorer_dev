import React from 'react';
import { useStyles } from 'src/pages/addresses/component/PrivateNote2/style';
import Typography from '@material-ui/core/Typography';

interface IPrivateNote2Props {
}

const PrivateNote2: React.FC<IPrivateNote2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Name or Number
                </Typography>
                <div className={classes.custom25123079} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDhDNy4xIDggOCA3LjEgOCA2QzggNC45IDcuMSA0IDYgNEM0LjkgNCA0IDQuOSA0IDZDNCA3LjEgNC45IDggNiA4Wk02IDEwQzQuOSAxMCA0IDEwLjkgNCAxMkM0IDEzLjEgNC45IDE0IDYgMTRDNy4xIDE0IDggMTMuMSA4IDEyQzggMTAuOSA3LjEgMTAgNiAxMFpNNiAxNkM0LjkgMTYgNCAxNi45IDQgMThDNCAxOS4xIDQuOSAyMCA2IDIwQzcuMSAyMCA4IDE5LjEgOCAxOEM4IDE2LjkgNy4xIDE2IDYgMTZaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+Cjwvc3ZnPgo='/>
                </div>
            </div>
            <div className={classes.div1} >
                <Typography className={classes.typography1} >
                    Privat note, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </Typography>
            </div>
        </div>
    );
};

export default PrivateNote2;



