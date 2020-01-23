import { Module, CacheModule, HttpModule } from '@nestjs/common';
import { CurrencyController } from 'src/module/currency/controller/currency.controller';
import { EventsController } from 'src/module/currency/controller/events.controller';
import { CoingeckoCurrencyService } from 'src/module/currency/service/currency.service';
import { DICurrencyService } from 'src/module/currency/service';

@Module({
    imports: [
        CacheModule.register(),
        HttpModule,
    ],
    providers: [
        CurrencyController,
        EventsController,
        {
            provide: DICurrencyService,
            useClass: CoingeckoCurrencyService,
        }
    ]
})
export class CurrencyModule { }
