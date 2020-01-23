import React from 'react';
import { useStyles } from 'src/pages/delegate/component/MainPage/style';
import PageTitle from 'src/pages/delegate/component/PageTitle';
import InfoWrapper from 'src/pages/delegate/component/InfoWrapper';
import TablesWrapper from 'src/pages/delegate/component/TablesWrapper';
import CommentsWrapper from 'src/pages/delegate/component/CommentsWrapper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});
    const { id } = useParams<{ id?: string }>();
    const model = useModel(MainPageModel);

    React.useEffect(() => {
        if (id) {
            model.loadInfo(id);
        }
    }, []);

    if (model.isLoading) {
        return (
            <div className={classes.loader}>
                <CircularProgress size={172} />
            </div>
        );
    }

    return (
        <React.Fragment>
            <PageTitle />
            <InfoWrapper/>
            <Grid container className={classes.wrapper}>
                <TablesWrapper />
                <CommentsWrapper />
            </Grid>
        </React.Fragment>
    );
};

export default observer(MainPage);
