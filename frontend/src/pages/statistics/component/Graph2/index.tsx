import React from 'react';
import { useStyles } from 'src/pages/statistics/component/Graph2/style';
import LegendAndInf from 'src/pages/statistics/component/LegendAndInf';
import Picture6 from 'src/pages/statistics/component/Picture6';
import Meter from 'src/pages/statistics/component/Meter';
import From4 from 'src/pages/statistics/component/From4';
import To4 from 'src/pages/statistics/component/To4';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface IGraph2Props {
}

const Graph2: React.FC<IGraph2Props> = ({ }) => {
    const classes = useStyles({});

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <LegendAndInf />
            </div>
            <div className={classes.div1} >
                <Picture6 />
            </div>
            <div className={classes.div2} >
                <Meter />
                <From4 />
                <To4 />
                <Zoom className={classes.zoom} >
                    <Typography className={classes.typography} >
                        Zoom
                    </Typography>
                    <Button
                        className={classes.button}
                        classes={{ root: classes.root1 }}
                    >
                        <Typography className={classes.typography1} >
                            1d
                        </Typography>
                    </Button>
                    <Button
                        className={classes.button1}
                        classes={{ root: classes.root2 }}
                    >
                        <Typography className={classes.typography1} >
                            7d
                        </Typography>
                    </Button>
                    <Button
                        className={classes.button2}
                        classes={{ root: classes.root1 }}
                    >
                        <Typography className={classes.typography2} >
                            1m
                        </Typography>
                    </Button>
                    <Button
                        className={classes.button3}
                        classes={{ root: classes.root1 }}
                    >
                        <Typography className={classes.typography2} >
                            3m
                        </Typography>
                    </Button>
                    <Button
                        className={classes.button4}
                        classes={{ root: classes.root1 }}
                    >
                        <Typography className={classes.typography2} >
                            All
                        </Typography>
                    </Button>
                </Zoom>
            </div>
        </div>
    );
};

export default Graph2;



