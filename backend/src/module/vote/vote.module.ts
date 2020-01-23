import { Module } from '@nestjs/common';
import { VoteController } from 'src/module/vote/controller/vote.controller';
import { VoteService } from 'src/module/vote/service/vote.service';

@Module({
    providers: [
        VoteController,
        VoteService,
    ]
})
export class VoteModule { }
