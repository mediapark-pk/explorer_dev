import { Module } from '@nestjs/common';
import { CommonController } from 'src/module/common/controller/common.controller';
import { EventsController } from 'src/module/common/controller/events.controller';
import { CommonService } from 'src/module/common/service/common.service';

@Module({
    providers: [
        CommonController,
        EventsController,
        CommonService
    ]
})
export class CommonModule { }
