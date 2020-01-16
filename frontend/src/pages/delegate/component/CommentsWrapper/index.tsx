import React, { useState } from 'react';
import { AppTabPanel } from '@app/ui-kit';
import { useStyles } from 'src/pages/delegate/component/CommentsWrapper/style';
import { Tabs, Tab } from '@material-ui/core';
import Comments from 'src/pages/delegate/component/CommentsWrapper/component/Comments';
import { Notes } from 'src/pages/delegate/component/CommentsWrapper/component/Notes';

enum TabPanels {
    Comments,
    Notes
}

interface ICommentsWrapperProps {}

const CommentsWrapper: React.FC<ICommentsWrapperProps> = ({ }) => {
    const classes = useStyles({});

    let [ tab, setTab ] = useState(TabPanels.Comments);

    return (
        <div className={classes.root} >
            <Tabs
                className={classes.tabs}
                value={tab}
                onChange={(event, newValue) => setTab(newValue)}
                TabIndicatorProps={{
                    className: classes.tabIndicator
                }}
            >
                <Tab
                    className={classes.tab}
                    label={`Comments`}
                />
                <Tab
                    className={classes.tab}
                    label={`Notes`}
                />
            </Tabs>
            <AppTabPanel value={tab} index={TabPanels.Comments}>
                <Comments />
            </AppTabPanel>
            <AppTabPanel value={tab} index={TabPanels.Notes}>
                <Notes />
            </AppTabPanel>
        </div>
    );
};

export default CommentsWrapper;
