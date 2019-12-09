import React from 'react';
import { useStyles } from 'src/pages/Registration/component/TextFieldOutlinedActive3/style';
import Typography from '@material-ui/core/Typography';
import FormShape3 from 'src/pages/Registration/component/FormShape3';

interface ITextFieldOutlinedActive3Props {
}

const TextFieldOutlinedActive3: React.FC<ITextFieldOutlinedActive3Props> = ({ }) => {
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
            <FormShape3 />
        </div>
    );
};

export default TextFieldOutlinedActive3;



