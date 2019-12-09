import React from 'react';
import { useStyles } from 'src/app/component/FooterMenu/style';
import Button from '@material-ui/core/Button';

interface IFooterMenuProps {
}

const FooterMenu: React.FC<IFooterMenuProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.row}>
                <Button className={classes.button}>Our products</Button>
                <Button className={classes.button}>About</Button>
            </div>
            <div className={classes.row}>
                <Button className={classes.button}>FAQ</Button>
                <Button className={classes.button}>Login/Signup</Button>
            </div>
        </div>
    );
};

export default FooterMenu;



