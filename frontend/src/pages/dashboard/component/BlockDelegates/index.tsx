import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockDelegates/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockDelegatesModel from 'src/pages/dashboard/component/BlockDelegates/model';
import AppTable from 'ui-kit/AppTable';
import AppTableTitle from 'ui-kit/AppTableTitle';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Delegate } from 'src/core/model/Delegate';
import AppTableBody from 'ui-kit/AppTableBody';
import Button from '@material-ui/core/Button';
import NoIccon25 from 'src/pages/dashboard/component/NoIccon25';

interface IBlockDelegatesProps {
}

const BlockDelegates: React.FC<IBlockDelegatesProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockDelegatesModel);

    return (
        <div className={classes.root} >
            <AppTable
                className={classes.appTable}
                dataProvider={model.dataProvider}
            >
                <AppTableTitle className={classes.appTableTitle} >
                    <div className={classes.custom1583524} >
                        <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjQ4MDUgMTYuMTI4MVY4LjgzMTkxSDI0LjQ5MzRDMjUuMTAxNCA4LjgzMTkxIDI2LjMxNzUgOS4xOTY3MiAyNi4zMTc1IDEwLjY1NiIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0yNi4zMTc1IDE0LjMwNDJWMjAuMTQxMkMyNi4zMTc1IDIwLjc0OTIgMjUuOTUyNiAyMS45NjUyIDI0LjQ5MzQgMjEuOTY1MkMyMy4wMzQyIDIxLjk2NTIgMjEuMjEwMSAyMS45NjUyIDIwLjQ4MDUgMjEuOTY1MlYyMC4xNDEyIiBzdHJva2U9IiMzRDkwRTMiLz4KPHBhdGggZD0iTTIzLjAzNDIgMTIuNDgwMUgyNy43NzY3QzI4LjUwNjQgMTIuNDgwMSAyOS45NjU2IDEyLjkxNzkgMjkuOTY1NiAxNC42NjlDMjkuOTY1NiAxNS41NDQ1IDI5Ljk2NTYgMTYuNDkzIDI5Ljk2NTYgMTYuODU3OEMyOS45NjU2IDE3LjM0NDMgMjkuNjczOCAxOC4zMTcxIDI4LjUwNjQgMTguMzE3MSIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGQ9Ik0yNC40OTMxIDE4LjMxNzFDMjEuOTM5NCAxOC4zMTcxIDE2LjgzMiAxOC4zMTcxIDE2LjgzMiAxOC4zMTcxVjEyLjQ4MDFDMTcuMzE4NCAxMi40ODAxIDE4LjY1NjEgMTIuNDgwMSAxOC42NTYxIDEyLjQ4MDEiIHN0cm9rZT0iIzNEOTBFMyIvPgo8Y2lyY2xlIGN4PSIyMy41IiBjeT0iMTUuNSIgcj0iMTIuNSIgc3Ryb2tlPSIjM0Q5MEUzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzkuNDA5IDE5Ljg5MjNDMzkuMzE4MyAyMC4yMjE2IDM5LjIxNzYgMjAuNTQ2OCAzOS4xMDczIDIwLjg2NzVMNDQuOTYxMyAyNC4wODI1TDI0IDM1LjU5NDVMMy4wMzg2OCAyNC4wODI1TDguMDU3OTcgMjEuMzI1OUM3LjkzODg0IDIxLjAxMDMgNy44MjkxMSAyMC42OTAxIDcuNzI5MTIgMjAuMzY1NkwxLjc1OTMxIDIzLjY0NDNMMS41IDIzLjc4NjdMMS41IDI0LjA4MjVMMS41IDM1LjAzOTVWMzUuMzM2OEwxLjc2MTE4IDM1LjQ3ODhMMjMuNzYxMiA0Ny40MzkzTDI0IDQ3LjU2OTJMMjQuMjM4OCA0Ny40MzkzTDQ2LjIzODggMzUuNDc4OEw0Ni41IDM1LjMzNjhWMzUuMDM5NVYyNC4wODI1VjIzLjc4NjdMNDYuMjQwNyAyMy42NDQzTDM5LjQwOSAxOS44OTIzWk0yNC41IDM2LjQ2MDhMNDUuNSAyNC45Mjc2VjM0Ljc0MjJMMjQuNSA0Ni4xNTkxVjM2LjQ2MDhaTTIzLjUgMzYuNDYwOFY0Ni4xNTkxTDIuNSAzNC43NDIyTDIuNSAyNC45Mjc2TDIzLjUgMzYuNDYwOFoiIGZpbGw9IiMzRDkwRTMiLz4KPHBhdGggZD0iTTkgMzNMMjIgNDAuMDY3NiIgc3Ryb2tlPSIjM0Q5MEUzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTUgMzFMNiAzMS41IiBzdHJva2U9IiMzRDkwRTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K'/>
                    </div>
                    <Typography className={classes.typography} >
                        Delegates
                    </Typography>
                    <Typography className={classes.typography1} >
                        101
                    </Typography>
                    <Typography className={classes.typography2} >
                        delegate
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
                                        Username
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography4} >
                                        Votes
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography5} >
                                        Uptime
                                    </Typography>
                                </div>
                            </TableCell>
                            <TableCell
                                className={classes.tableHead}
                                classes={{ root: classes.root2 }}
                            >
                                <div className={classes.div} >
                                    <Typography className={classes.typography6} >
                                        Status
                                    </Typography>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <AppTableBody className={classes.appTableBody} >
                        {(item: Delegate, index: number) => (
                            <TableRow
                                className={classes.tableRow}
                                classes={{ root: classes.root3 }}
                                key={index}
                            >
                                <TableCell
                                    className={classes.tableRow}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography7} >
                                            { item.username }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableRow}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography8} >
                                            { item.confirmedVoteCount }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableRow}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography9} >
                                            { item.uptime }
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className={classes.tableRow}
                                    classes={{ root: classes.root2 }}
                                >
                                    <div className={classes.div1} >
                                        <Typography className={classes.typography10} >
                                            { item.status }
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
                <NoIccon25 />
            </Button>
        </div>
    );
};

export default observer(BlockDelegates);



