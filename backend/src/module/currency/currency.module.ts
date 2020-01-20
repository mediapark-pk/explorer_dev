import { Module, CacheModule } from '@nestjs/common';
import { CurrencyController } from 'src/module/currency/controller/currency.controller';
import { EventsController } from 'src/module/currency/controller/events.controller';
import { CurrencyService } from 'src/module/currency/service/currency.service';
import { CurrencyAdapterModule } from 'src/module/currency/adapter/currency';

@Module({
    imports: [
        CurrencyAdapterModule,
        CacheModule.register(),
    ],
    providers: [
        CurrencyController,
        EventsController,
        CurrencyService,
    ]
})
export class CurrencyModule { }
