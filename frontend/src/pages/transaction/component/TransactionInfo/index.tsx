import React from 'react';
import { useStyles } from 'src/pages/transaction/component/TransactionInfo/style';
import { useDI } from '@app/core';
import { observer } from 'mobx-react-lite';
import TransactionInfoModel from 'src/pages/transaction/component/TransactionInfo/model';
import Sender3 from 'src/pages/transaction/component/Sender3';
import Amount from 'src/pages/transaction/component/Amount';
import DateTime from 'src/pages/transaction/component/DateTime';
import Volume from 'src/pages/transaction/component/Volume';
import Type from 'src/pages/transaction/component/Type';
import Fee from 'src/pages/transaction/component/Fee';
import Typography from '@material-ui/core/Typography';
import InBlock from 'src/pages/transaction/component/InBlock';

interface ITransactionInfoProps {
}

const TransactionInfo: React.FC<ITransactionInfoProps> = ({ }) => {
    const classes = useStyles({});
    const model = useDI(TransactionInfoModel);

    return (
        <div className={classes.root} >
            <div className={classes.div} >
                <Sender3 SenderId={model.SenderId} />
                <Amount Amount={model.Amount} />
                <div className={classes.custom184749} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNzAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCA3MCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5IDEwLjVMNTkuMjg3MiAyME02OSAxMC41SDFNNjkgMTAuNUw1OS4yODcyIDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='/>
                </div>
                <DateTime recipient={model.recipient} />
                <Volume dateTime={model.dateTime} />
            </div>
            <div className={classes.div1} >
                <Type TrnType={model.TrnType} />
                <Fee fee={model.fee} />
                <div className={classes.custom184748} >
                    <img src='data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iNzAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCA3MCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5IDEwLjVMNTkuMjg3MiAyME02OSAxMC41SDFNNjkgMTAuNUw1OS4yODcyIDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='/>
                </div>
                <div className={classes.div2} >
                    <Typography className={classes.typography} >
                        Block forger
                    </Typography>
                    <Typography
                        className={classes.typography1}
                    >
                        { model.delegate }
                    </Typography>
                </div>
                <InBlock blockforger={model.blockforger} />
            </div>
        </div>
    );
};

export default observer(TransactionInfo);



