import React from 'react';
import { useStyles } from 'src/pages/addresses/component/TextFieldOutlinedActive8/style';
import Typography from '@material-ui/core/Typography';
import FormShape8 from 'src/pages/addresses/component/FormShape8';

interface ITextFieldOutlinedActive8Props {
}

const TextFieldOutlinedActive8: React.FC<ITextFieldOutlinedActive8Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <div className={classes.div1} >
                    <Typography className={classes.typography} >
                        Enter NEW password
                    </Typography>
                </div>
                <div className={classes.div2} >
                    <div className={classes.textCursor} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMSIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDEgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDAuOTExMTExVjE3SDBWMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='/>
                    </div>
                    <Typography className={classes.typography1} >
                        Input text
                    </Typography>
                </div>
                <FormShape8 />
            </div>
            <div className={classes.div3} >
                <Typography className={classes.typography2} >
                    Assistive text
                </Typography>
            </div>
        </div>
    );
};

export default TextFieldOutlinedActive8;



