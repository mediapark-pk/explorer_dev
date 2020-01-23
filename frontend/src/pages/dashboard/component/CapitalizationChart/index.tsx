// tslint:disable: no-magic-numbers
import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/CapitalizationChart/style';
import { AppRichMultiTimeChart } from 'src/app/component/chart/MultiTimeChart';
import { BlockCapitalizationModel } from 'src/pages/dashboard/component/CapitalizationChart/model';
import { Typography } from '@material-ui/core';
import { CHART_COLORS } from 'src/app/component/chart/colors';
import { useModel } from '@app/core';
import { CapitalizationIcon } from 'src/common/component/Icons/index';
import { observer } from 'mobx-react-lite';
import Skeleton from 'src/common/component/Skeleton';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(BlockCapitalizationModel);

    return (
        <div className={classes.root} >
            <div className={classes.titleWrapper} >
                <CapitalizationIcon />
                <Typography component={'div'} className={classes.title} >
                    Market capitalization
                    <div className={classes.capValue}>
                        {model.isLoading ? (
                            <Skeleton width={50} inline />
                        ) : model.marketCap}
                    </div>
                    <span className={classes.under}>$</span>
                </Typography>
            </div>
            <AppRichMultiTimeChart dataProvider={model.dataProvider} datasetMeta={[
                { label: 'ETH', color: CHART_COLORS.blue },
                { label: 'BTC', color: CHART_COLORS.orange },
                { label: 'USD', color: CHART_COLORS.green },
            ]} />
        </div>
    );
};

export default observer(MainPage);
