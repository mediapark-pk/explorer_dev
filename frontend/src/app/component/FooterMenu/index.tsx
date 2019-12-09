import React from 'react';
import { useStyles } from 'src/app/component/FooterMenu/style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DDKBuyButton from 'src/app/component/DDKBuyButton';

interface IFooterMenuProps {
}

const FooterMenu: React.FC<IFooterMenuProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Button
                className={classes.button}
                classes={{ root: classes.root1 }}
            >
                <Typography className={classes.typography} >
                    our products
                </Typography>
            </Button>
            <Button
                className={classes.button1}
                classes={{ root: classes.root2 }}
            >
                <Typography className={classes.typography1} >
                    About
                </Typography>
            </Button>
            <Button
                className={classes.button2}
                classes={{ root: classes.root3 }}
            >
                <Typography className={classes.typography2} >
                    FAQ
                </Typography>
            </Button>
            <Button
                className={classes.button3}
                classes={{ root: classes.root4 }}
            >
                <Typography className={classes.typography3} >
                    Login/Signup
                </Typography>
            </Button>
            <DDKBuyButton />
        </div>
    );
};

export default FooterMenu;



