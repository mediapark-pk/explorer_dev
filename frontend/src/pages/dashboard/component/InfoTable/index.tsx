import React, { ReactNode, useState, useRef } from 'react';
import { useStyles } from 'src/pages/dashboard/component/InfoTable/style';
import { 
    Grid,
    Button,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    Table
} from '@material-ui/core';
import { AppTable } from '@app/ui-kit';
import { DataProvider } from '@app/core';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { fromEvent } from 'rxjs';
import { sampleTime } from 'rxjs/operators';
import { COLORS } from 'src/app/component/Theme/theme';
import { Link } from 'react-router-dom';

interface IInfoTableProps {
    Icon: ReactNode;
    label: string;
    tip: string;
    headers: Array<[string, string?]>;
    dataProvider: DataProvider;
    link: string;
    children: (any, number) => ReactNode;
}

const InfoTable: React.FC<IInfoTableProps> = ({ Icon, label, tip, headers, dataProvider, children, link }) => {
    const classes = useStyles({});
    const scrollWrapper = useRef<HTMLElement>();
    const [scrollPercent, setScrollPercent] = useState(0);

    React.useEffect(() => {
        const subscriber = fromEvent<React.UIEvent<HTMLElement>>(scrollWrapper.current, 'scroll')
        .pipe(
            sampleTime(200)
        ).subscribe(({ target: { scrollTop, scrollHeight } }: any) => {
            setScrollPercent(scrollTop / (scrollHeight - 300));
        });
        return () => subscriber.unsubscribe();
    }, []);

    const convertScrollPercent = (p) => Math.sqrt(p * 100) / 10;

    return (
        <Grid container className={classes.root} direction='column' >
            <Grid container item alignItems='center'>
                {Icon}
                <span className={classes.headLabel}>{label}</span>
                <span className={classes.headAmount}>{dataProvider.repository.totalCount}</span>
                <span className={classes.headTip}>{tip}</span>
            </Grid>
            <Grid container item >                
                <AppTable dataProvider={dataProvider} className={classes.appTable} >
                    <Table className={classes.table} >
                        <TableHead className={classes.thead} >
                            <TableRow>
                                {headers.map(([headerLabel, className], index) => (
                                    <TableCell key={index} className={clsx(classes.th, className)} >
                                        <Typography>
                                            {headerLabel}
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody ref={scrollWrapper} className={classes.tbody} >
                            <tr
                                className={clsx(classes.alpha, classes.alphaTop)}
                                style={{ boxShadow: `0 0 90px ${convertScrollPercent(scrollPercent) * 90}px ${COLORS.MIRAGE}` }}
                            ></tr>                            
                            {dataProvider.repository.data.map(children)}
                            <tr
                                className={clsx(classes.alpha, classes.alphaBottom)}
                                style={{ boxShadow: `0 0 90px ${convertScrollPercent(1 - scrollPercent) * 90}px ${COLORS.MIRAGE}` }}
                            ></tr>
                        </TableBody>
                    </Table>
                </AppTable>
            </Grid>
            <Grid container item justify='center' >
                <Button className={classes.button} component={Link} to={link}>
                    View all {label}
                </Button>
            </Grid>
        </Grid>
    );
};

export default observer(InfoTable);
