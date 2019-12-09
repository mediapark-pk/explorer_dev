import React from 'react';
import { useStyles } from 'src/app/component/AppMenu/style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IAppMenuProps {
}

const AppMenu: React.FC<IAppMenuProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <Button className={classes.button}>Dashboard</Button>
            <Button className={classes.button}>Delegates</Button>
            <Button className={classes.button}>Transactions</Button>
            <Button className={classes.button}>Blocks</Button>
            <Button className={classes.button}>Addresses</Button>
            <Button className={classes.button}>Statistic</Button>
        </div>
    );
};

export default AppMenu;
