// tslint:disable: no-magic-numbers
import React from 'react';
import { useStyles } from 'src/pages/dashboard/component/CurencyConvertor/style';
import { ConvertorIcon } from 'src/common/component/Icons';
import { Grid, TextField, Select, MenuItem } from '@material-ui/core';
import Skeleton from 'src/common/component/Skeleton';
import { CurencyConvertorModel, BaseCode } from 'src/pages/dashboard/component/CurencyConvertor/model';
import { useModel } from '@app/core';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

interface ICurencyConvertorProps {}

const CurencyConvertor: React.FC<ICurencyConvertorProps> = ({ }) => {
    const classes = useStyles({});
    const model = useModel(CurencyConvertorModel);

    return (
        <Grid container className={classes.root} wrap='nowrap'>
            <Grid className={classes.title} container item alignItems='center' >
                <ConvertorIcon className={classes.icon} />
                <span>Convertor</span>
            </Grid>
            <Grid container item direction='column' >
                <Grid container item >
                    <Grid item className={classes.head} >
                        <div className={classes.headLabel}>DDK</div>
                        <TextField
                            className={classes.field}
                            value={model.ddkValue}
                            type='number'
                            onChange={model.onDDKValueUpdate}
                        />
                    </Grid>
                    {Array.from(model.currenciesData).map(([code, data]) => (
                        <Grid item className={classes.head} key={code} >
                            <div className={classes.headLabel} >
                                {code === BaseCode.Btc || code === BaseCode.Usd
                                ? (<span className={classes.headLabelText}>{code}</span>)
                                : (
                                    <Select
                                        className={classes.select}
                                        value={model.customCode}
                                        displayEmpty
                                        placeholder={'Choose currency'}
                                        onChange={model.onCustomCodeUpdate}
                                    >
                                        <MenuItem value=''>
                                            Choose currency
                                        </MenuItem>
                                        {model.currencies.length
                                          && model.currencies.map((currency: string, index: number) => (
                                            <MenuItem key={index} value={currency}>{currency.toUpperCase()}</MenuItem>
                                        ))}
                                    </Select>
                                )                                    
                                }
                                {!model.isLoading && data && data.change && (
                                    <span className={clsx(classes.change,
                                        data.change >= 0
                                        ? 'positive'
                                        : 'negative'
                                    )}>{data.change > 0 && '+'}{data.change.toFixed(2)}%</span>
                                )}
                                {model.isLoading && (
                                    <Skeleton inline width={50} top={2} left={8} />
                                )}
                            </div>
                            {!model.isLoading && data && (
                            <TextField
                                className={classes.field}
                                value={data.value}
                                type='number'
                                name={code}
                                onChange={model.onValueUpdate}
                            />
                            )}
                            {model.isLoading && (
                                <Skeleton width={248} height={20} top={4} />
                            )}
                        </Grid>
                    ))}
                    {!model.customCode && (
                        <Grid item className={classes.head} >
                            <div className={classes.headLabel} >
                                <Select
                                    className={classes.select}
                                    value={model.customCode}
                                    displayEmpty
                                    placeholder={'Choose currency'}
                                    onChange={model.onCustomCodeUpdate}
                                >
                                    <MenuItem value=''>
                                        Choose currency
                                    </MenuItem>
                                    {model.currencies.length
                                        && model.currencies.map((currency: string, index: number) => (
                                        <MenuItem key={index} value={currency}>{currency.toUpperCase()}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </Grid>
                    )}
                </Grid>
                <Grid container item direction='column' >
                    <Grid container item className={classes.row} alignItems='center' >
                        <Grid item className={classes.label}>Sell price (Ask)</Grid>
                        {Array.from(model.currenciesData).map(([code, data]) => (
                            <Grid item key={code}>
                                {!model.isLoading ?
                                    data && data.sell
                                        ? model
                                            .formatter(BaseCode.Usd)
                                            .format(data.sell.lastInCurrency[BaseCode.Usd])
                                        : '-'
                                    : (<Skeleton width={100} />)
                                }
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item className={classes.row} alignItems='center' >
                        <Grid item className={classes.label}>Buy price (Bid)</Grid>
                        {Array.from(model.currenciesData).map(([code, data]) => (
                            <Grid item key={code}>
                                {!model.isLoading ?
                                    data && data.sell
                                        ? model
                                            .formatter(BaseCode.Usd)
                                            .format(data.buy.lastInCurrency[BaseCode.Usd])
                                        : '-'
                                    : (<Skeleton width={100} />)
                                }
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item className={classes.row} alignItems='center' >
                        <Grid item className={classes.label}>Low price</Grid>
                        {Array.from(model.currenciesData).map(([code, data]) => (
                            <Grid item key={code}>
                                {!model.isLoading ?
                                    data && data.sell
                                        ? model
                                            .formatter(code)
                                            .format(data.low)
                                        : '-'
                                    : (<Skeleton width={100} />)
                                }
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item className={classes.row} alignItems='center' >
                        <Grid item className={classes.label}>High price</Grid>
                        {Array.from(model.currenciesData).map(([code, data]) => (
                            <Grid item key={code}>
                                {!model.isLoading ?
                                    data && data.sell
                                        ? model
                                            .formatter(code)
                                            .format(data.hight)
                                        : '-'
                                    : (<Skeleton width={100} />)
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>            
        </Grid>
    );
};

export default observer(CurencyConvertor);
