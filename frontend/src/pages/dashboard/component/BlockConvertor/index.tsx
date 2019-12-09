import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlockConvertor/style';
import { useDI } from 'src/core/di';
import { observer } from 'mobx-react-lite';
import BlockConvertorModel from 'src/pages/dashboard/component/BlockConvertor/model';
import BlockTitle1 from 'src/pages/dashboard/component/BlockTitle1';
import BlockDDK from 'src/pages/dashboard/component/BlockDDK';
import BlockUSD from 'src/pages/dashboard/component/BlockUSD';
import BlockBTC from 'src/pages/dashboard/component/BlockBTC';
import BlockETH from 'src/pages/dashboard/component/BlockETH';
import AppTable from 'src/uikit/AppTable';
import Table from '@material-ui/core/Table';
import { Convertor } from 'src/core/model/Convertor';
import AppTableBody from 'src/uikit/AppTableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface IBlockConvertorProps {
}

const BlockConvertor: React.FC<IBlockConvertorProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(BlockConvertorModel);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <BlockTitle1 />
                <BlockDDK />
                <BlockUSD />
                <BlockBTC />
                <BlockETH />
            </div>
            <div className={classes.div1} >
                <AppTable
                    className={classes.appTable}
                    dataProvider={model.dataProvider}
                >
                    <Table className={classes.table} >
                        <AppTableBody className={classes.appTableBody} >
                            {(item: Convertor, index: number) => (
                                <TableRow
                                    className={classes.tableRow}
                                    classes={{ root: classes.root1 }}
                                    key={index}
                                >
                                    <TableCell
                                        className={classes.tableRow}
                                        classes={{ root: classes.root2 }}
                                    >
                                        <div className={classes.div2} >
                                            <Typography className={classes.typography} >
                                                Sell price
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableRow}
                                        classes={{ root: classes.root2 }}
                                    >
                                        <div className={classes.div2} >
                                            <Typography className={classes.typography1} >
                                                { 15.4 }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableRow}
                                        classes={{ root: classes.root2 }}
                                    >
                                        <div className={classes.div2} >
                                            <Typography className={classes.typography1} >
                                                { 15.4 }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableRow}
                                        classes={{ root: classes.root2 }}
                                    >
                                        <div className={classes.div2} >
                                            <Typography className={classes.typography1} >
                                                { 15.4 }
                                            </Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </AppTableBody>
                    </Table>
                </AppTable>
            </div>
        </div>
    );
};

export default observer(BlockConvertor);



