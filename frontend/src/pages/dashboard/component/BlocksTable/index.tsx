import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/BlocksTable/style';
import InfoTable from 'src/pages/dashboard/component/InfoTable';
import { BlocksTableModel } from 'src/pages/dashboard/component/BlocksTable/model';
import { useModel } from '@app/core';
import { BlockIcon } from 'src/common/component/Icons';
import { VMBlock } from 'src/common/model/VMBlock';
import { TableRow, TableCell, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

interface IBlocksTableProps {}

const BlocksTable: React.FC<IBlocksTableProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(BlocksTableModel);

    return (
        <div className={classes.root} >
            <InfoTable
                Icon={<BlockIcon />}
                label={'Blocks'}
                tip={'in total'}
                dataProvider={model.dataProvider}
                link={'/blocks'}
                headers={[
                    ['Height', classes.bHeight],
                    ['Time', classes.bTime],
                    ['Delegate', classes.bDelegate],
                    ['Txns', classes.bTxns],
                    ['Amount', classes.bAmount],
                    ['Fee', classes.bFee]
                ]}
            >
                {(block: VMBlock) => (
                   <TableRow key={block.id} >
                       <TableCell className={classes.bHeight} >
                           <Typography className={classes.link} >
                               {block.height}
                           </Typography>
                       </TableCell>
                       <TableCell className={classes.bTime} >
                           <Typography>
                               {block.createdAt.humanize()}
                           </Typography>
                       </TableCell>
                       <TableCell className={classes.bDelegate} >
                           <NavLink to={`/delegates/${block.generatorPublicKey}`} >
                               <Typography className={classes.link} >
                                   {block.generatorPublicKey}
                               </Typography>
                           </NavLink>
                            <div className={classes.shadow}></div>
                       </TableCell>
                       <TableCell className={classes.bTxns} >
                           <Typography>
                               {block.transactionCount}
                           </Typography>
                       </TableCell>
                       <TableCell className={classes.bAmount} >
                           <Typography>
                               {block.amount}
                           </Typography>
                       </TableCell>
                       <TableCell className={classes.bFee} >
                           <Typography>
                               {block.fee}
                           </Typography>
                       </TableCell>
                   </TableRow>
               )}
            </InfoTable>
        </div>
    );
};

export default BlocksTable;
