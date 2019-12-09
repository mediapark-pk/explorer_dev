import React from 'react';
import { useStyles } from 'src/pages/Login/component/TextFieldOutlinedActive1/style';
import Typography from '@material-ui/core/Typography';
import FormShape1 from 'src/pages/Login/component/FormShape1';

interface ITextFieldOutlinedActive1Props {
}

const TextFieldOutlinedActive1: React.FC<ITextFieldOutlinedActive1Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Typography className={classes.typography} >
                    Password
                </Typography>
            </div>
            <div className={classes.div1} >
                <div className={classes.textCursor} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDEgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDAuOTExMTExVjE3SDBWMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
                </div>
                <Typography className={classes.typography1} >
                    Input text
                </Typography>
            </div>
            <FormShape1 />
        </div>
    );
};

export default TextFieldOutlinedActive1;



