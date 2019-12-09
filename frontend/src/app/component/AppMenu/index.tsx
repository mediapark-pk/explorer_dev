import React from 'react';
import { useStyles } from 'src/app/component/AppMenu/style';
import { NavLink } from 'react-router-dom';

interface IAppMenuProps {
}

const AppMenu: React.FC<IAppMenuProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <NavLink to="/dashboard"    className={classes.button} activeClassName={classes.active}>Dashboard</NavLink>
            <NavLink to="/delegates"    className={classes.button} activeClassName={classes.active}>Delegates</NavLink>
            <NavLink to="/transactions" className={classes.button} activeClassName={classes.active}>Transactions</NavLink>
            <NavLink to="/blocks"       className={classes.button} activeClassName={classes.active}>Blocks</NavLink>
            <NavLink to="/addresses"    className={classes.button} activeClassName={classes.active}>Addresses</NavLink>
            <NavLink to="/statistics"   className={classes.button} activeClassName={classes.active}>Statistics</NavLink>
        </div>
    );
};

export default AppMenu;
