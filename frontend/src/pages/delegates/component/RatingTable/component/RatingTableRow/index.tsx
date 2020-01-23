import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingTable/component/RatingTableRow/style';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface IRatingTableRowProps {
    rank: number;
    name: string;
    data: string;
}

const RatingTableRow: React.FC<IRatingTableRowProps> = ({ rank, name, data }) => {
    const classes = useStyles({});

    return (
        <TableRow className={classes.root} >
            <TableCell
                className={classes.tableCell}
                classes={{ root: classes.tableCellRank }}
            >
                <div className={classes.tableCellWrapper} >
                    <Typography className={classes.rank} >
                        { rank }
                    </Typography>
                </div>
            </TableCell>
            <TableCell
                className={classes.tableCell}
            >
                <div className={classes.tableCellWrapper} >
                    <Typography className={classes.name} >
                        { name }
                    </Typography>
                </div>
            </TableCell>
            <TableCell
                className={classes.tableCell}
            >
                <div className={classes.tableCellWrapper} >
                    <Typography className={classes.data} >
                        { data }
                    </Typography>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default RatingTableRow;
