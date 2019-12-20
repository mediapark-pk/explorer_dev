import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockBloks/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import BlockBloksModel from 'src/pages/dashboard/component/BlockBloks/model';
import { AppTable } from '@app/ui-kit';
import { AppTableTitle } from '@app/ui-kit';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Block } from 'src/core/model/Block';
import { AppTableBody } from '@app/ui-kit';
import Button from '@material-ui/core/Button';
import NoIccon26 from 'src/pages/dashboard/component/NoIccon26';

interface IBlockBloksProps {
}

const BlockBloks: React.FC<IBlockBloksProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockBloksModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle} >
                    <div className={classes.custom1583482} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDEyLjY1MjlMMjQgMC41NzA0MzVMMiAxMi42NTI5TTQ2IDEyLjY1MjlMMjQgMjQuNzM1M000NiAxMi42NTI5VjM2LjYwOTlMMjQgNDguNTcwNE0yIDEyLjY1MjlMMjQgMjQuNzM1M00yIDEyLjY1MjlMMiAzNi42MDk5TDI0IDQ4LjU3MDRNMjQgMjQuNzM1M1Y0OC41NzA0IiBzdHJva2U9IiMzRDkwRTMiLz4KPC9zdmc+Cg=='/>
                    </div>
                    <Typography className={classes.typography} >
                        Blocks
                    </Typography>
                    <Typography className={classes.typography1} >
                        1 340 402
                    </Typography>
                    <Typography className={classes.typography2} >
                        in total
                    </Typography>
                </AppTableTitle>
                <Table className={classes.table} >
                    <TableHead className={classes.tableHead} >
                        <TableRow
                            className={classes.tableHead}
                            classes={{ root: classes.root1 }}
                        >
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography3} >
                                        Height
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography4} >
                                        Time
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography5} >
                                        Delegate
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography6} >
                                        Txns
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography7} >
                                        Amount
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography8} >
                                        Fee
                                    </Typography>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Block, index: number) => (
                            <TableRow
                                className={classes.tableRow}
                                classes={{ root: classes.root3 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography9} >
                                            { item.height }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography10} >
                                            { item.time }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell1}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div2} >
                                        <Typography className={classes.typography11} >
                                            { item.delegate }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography12} >
                                            { item.txns }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography13} >
                                            { item.amount }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableCell}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography14} >
                                            { item.fee }
                                        </Typography>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </AppTableBody>
                </Table>
            </AppTable>
            <Button
                className={classes.button}
                classes={{ root: classes.root4 }}
            >
                <NoIccon26 />
            </Button>
        </div>
    );
};

export default observer(BlockBloks);



