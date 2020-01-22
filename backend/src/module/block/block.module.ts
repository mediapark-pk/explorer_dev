import { Module } from '@nestjs/common';
import { BlockController } from 'src/module/block/controller/block.controller';
import { BlockService } from 'src/module/block/service/block.service';
import { EventsController } from 'src/module/block/controller/events.controller';

@Module({
    providers: [
        BlockController,
        EventsController,
        BlockService
    ]
})
export class BlockModule { }
