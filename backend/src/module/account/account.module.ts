import { Module } from '@nestjs/common';
import { AccountController } from 'src/module/account/controller/account.controller';
import { AccountService } from 'src/module/account/service/account.service';
import { EventsController } from 'src/module/account/controller/events.controller';

@Module({
    providers: [
        AccountController,
        EventsController,
        AccountService
    ]
})
export class AccountModule { }
