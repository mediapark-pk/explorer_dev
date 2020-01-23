import { singleton } from 'src/container';
import { OnInit } from '@app/core';
import { CurrencyService } from 'src/pages/dashboard/service/CurrencyService';
import { observable, action } from 'mobx';
import { ChangeEvent } from 'react';
import { ITicker } from '@app/common';
import { VMMarketData } from 'src/pages/dashboard/model/VMMarketData';

export enum BaseCode {
    Usd = 'usd',
    Btc = 'btc',
}

interface ICurrencyData {
    value: number;
    change: number;
    sell?: ITicker;
    buy?: ITicker;
    low: number;
    hight: number;
}

@singleton
export class CurencyConvertorModel implements OnInit {

    @observable ddkValue: number = 1;
    @observable currencies: string[] = [];
    @observable customCode: string = '';
    @observable isLoading: boolean = true;

    @observable currenciesData: Map<BaseCode | string, ICurrencyData> = new Map(
        Object.values(BaseCode).map(code => [code, null])
    );

    marketData: VMMarketData;

    constructor(
        private readonly service: CurrencyService,
    ) {
    }

    @action async onInit() {
        this.isLoading = true;

        try {
            this.currencies = await this.service.getSupportedCurencies();
            this.marketData = Object.assign(new VMMarketData(), await this.service.getDDKMarketData());

            this.currencies = this.currencies.filter(currency =>
                !Object.values(BaseCode).includes(currency as BaseCode));

            this.currenciesData.set(BaseCode.Usd, this.marketData.getInfo(BaseCode.Usd, this.ddkValue));
            this.currenciesData.set(BaseCode.Btc, this.marketData.getInfo(BaseCode.Btc, this.ddkValue));
        }
        finally {
            this.isLoading = false;
        }
    }

    @action.bound
    onDDKValueUpdate(event: ChangeEvent) {
        const value = (event.target as any).value as number;
        this.ddkValue = value;
        for (const [ currency, currencyData ] of this.currenciesData) {
            currencyData.value = this.marketData.getPrice(currency) * value;
        }
    }

    @action.bound
    onValueUpdate(event: ChangeEvent) {
        const value = (event.target as any).value as number;
        const code = (event.target as any).name as string;
        this.ddkValue = (1 / this.marketData.getPrice(code)) * value;
        for (const [ currency, currencyData ] of this.currenciesData) {
            currencyData.value = this.marketData.getPrice(currency) * this.ddkValue;
        }
    }

    @action.bound
    onCustomCodeUpdate(event: any) {
        const code = event.target.value as string;
        if (!code) {
            this.currenciesData.delete(this.customCode);
            this.customCode = '';
            return;
        }

        this.currenciesData.delete(this.customCode);
        this.customCode = code;
        this.currenciesData.set(code, this.marketData.getInfo(code, this.ddkValue));
    }

    formatter(currency: string) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 6,
        });
    }
}
