import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useStyles } from 'src/app/component/RedirectPage/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const RedirectPage = () => {
    const classes = useStyles({});
    return (
        <Grid container justify={'center'}>
            <Grid item>
                <div className={classes.content}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant='h3' className={classes.title}>
                                Page not Found
                            </Typography>
                            <Typography variant='h5' className={classes.subtitle}>
                                Looks like you've followed a broken link or entered a URL that doesn't exist on this
                                site.
                            </Typography>
                            <div>
                                <Button
                                    href='/'
                                    className={classes.button}
                                    startIcon={<ArrowBackIos/>}
                                >
                                    Back to Dashboard
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
        </Grid>
    );
};

export default RedirectPage;
