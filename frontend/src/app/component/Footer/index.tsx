import React from 'react';
import { useStyles } from 'src/app/component/Footer/style';
import DDKExplorerLogo from 'src/app/component/DDKExplorerLogo';
import Typography from '@material-ui/core/Typography';
import FooterMenu from 'src/app/component/FooterMenu';

interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <DDKExplorerLogo />
            <Typography className={classes.typography} >
                DDKscan is a Block Explorer and Analytics Platform for DDK, a decentralized DPOS blockchain based platform
            </Typography>
            <FooterMenu />
        </div>
    );
};

export default Footer;



