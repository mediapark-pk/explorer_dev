import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/DelegatesTable/style';
import InfoTable from 'src/pages/dashboard/component/InfoTable';
import { DelegatesTableModel } from 'src/pages/dashboard/component/DelegatesTable/model';
import { useModel } from '@app/core';
import { DelegateIcon } from 'src/common/component/Icons';
import { VMDelegate } from 'src/common/model/VMDelegate';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface IDelegatesTableProps {}

const DelegatesTable: React.FC<IDelegatesTableProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(DelegatesTableModel);

    return (
        <div className={classes.root} >
            <InfoTable
                Icon={<DelegateIcon />}
                label={'Delegates'}
                tip={'delegate'}
                dataProvider={model.dataProvider}
                link={'/delegates'}
                headers={[
                    ['Username', classes.dUsername],
                    ['Votes', classes.dVotes],
                    ['Uptime', classes.dUptime],
                    ['Status', classes.dStatus]
                ]}
            >
                {(delegate: VMDelegate) => (
                        <TableRow key={delegate.publicKey} >                            
                            <TableCell className={classes.dUsername} >
                                <NavLink to={`/delegates/${delegate.publicKey}`} >
                                    <Typography className={classes.link} >
                                        {delegate.username}
                                    </Typography>
                                </NavLink>
                                <div className={classes.shadow}></div>
                            </TableCell>
                            <TableCell className={classes.dVotes} >
                                <Typography>
                                    {delegate.votes}
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.dUptime} >
                                <Typography>
                                    {delegate.uptime}
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.dStatus} >
                                <Typography className={clsx(classes.status, delegate.status)} >
                                    {delegate.status && delegate.status.toLowerCase()}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
            </InfoTable>
        </div>
    );
};

export default DelegatesTable;
