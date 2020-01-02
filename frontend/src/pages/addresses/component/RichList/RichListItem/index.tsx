import React from 'react';
import { useStyles } from 'src/pages/addresses/component/RichList/RichListItem/style';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

interface IRichListItemProps {
    titleInfo: string;
    address: string;
}

const RichListItem: React.FC<IRichListItemProps> = ({ titleInfo, address }) => {
    const classes = useStyles({});

    return (
            <div className={classes.div}>
                <Link className={classes.link} to={`/account/${address}`}>
                    {titleInfo}
                </Link>
            </div>
    );
};

export default observer(RichListItem);
