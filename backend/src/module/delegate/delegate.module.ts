import { Module } from '@nestjs/common';
import { DelegateController } from 'src/module/delegate/controller/delegate.controller';
import { EventsController } from 'src/module/delegate/controller/events.controller';
import { DelegateService } from 'src/module/delegate/service/delegate.service';

@Module({
    providers: [
        DelegateController,
        EventsController,
        DelegateService
    ]
})
export class DelegateModule { }
