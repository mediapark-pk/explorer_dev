import React from 'react';
import { useStyles } from 'src/pages/addresses/component/TextFieldOutlinedActive6/style';
import Typography from '@material-ui/core/Typography';
import FormShape6 from 'src/pages/addresses/component/FormShape6';

interface ITextFieldOutlinedActive6Props {
}

const TextFieldOutlinedActive6: React.FC<ITextFieldOutlinedActive6Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Typography className={classes.typography} >
                        Email
                    </Typography>
                </div>
                <div className={classes.div2} >
                    <div className={classes.textCursor} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDEgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDAuOTExMTExVjE3SDBWMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
                    </div>
                    <Typography className={classes.typography1} >
                        ddkforger@email.com
                    </Typography>
                </div>
                <FormShape6 />
            </div>
            <div className={classes.div3} >
                <Typography className={classes.typography2} >
                    Assistive text
                </Typography>
            </div>
        </div>
    );
};

export default TextFieldOutlinedActive6;



