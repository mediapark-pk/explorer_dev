import React from 'react';
import { useStyles } from 'src/pages/delegates/component/RatingTable/component/RatingTableHeader/style';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';

interface IRatingTableHeaderProps {
    dataName: string;
}

const RatingTableHeader: React.FC<IRatingTableHeaderProps> = ({ dataName }) => {
    const classes = useStyles({});

    return (
        <TableHead className={classes.root} >
            <TableRow className={classes.tableRow} >
                <TableCell
                    className={classes.tableCell}
                    classes={{ root: classes.tableCellRank }}
                >
                    <div className={classes.tableCellWrapper} >
                        <Typography className={classes.headerTypography} >
                            Rank
                        </Typography>
                    </div>
                </TableCell>
                <TableCell
                    className={classes.tableCell}
                    classes={{ root: classes.tableCellName }}
                >
                    <div className={classes.tableCellWrapper} >
                        <Typography className={classes.headerTypography} >
                            Name
                        </Typography>
                    </div>
                </TableCell>
                <TableCell
                    className={classes.tableCell}
                    classes={{ root: classes.tableCellValue }}
                >
                    <div className={classes.tableCellWrapper} >
                        <Typography className={classes.headerTypography} >
                            { dataName }
                        </Typography>
                    </div>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default RatingTableHeader;
