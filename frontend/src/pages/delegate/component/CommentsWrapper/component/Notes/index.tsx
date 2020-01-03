import React from 'react';
import { useStyles } from 'src/pages/delegate/component/CommentsWrapper/component/Notes/style';
import { useParams } from 'react-router';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});
    let { id } = useParams();

    return (
        <div className={classes.root} >
            Notes
        </div>
    );
};

export default MainPage;
