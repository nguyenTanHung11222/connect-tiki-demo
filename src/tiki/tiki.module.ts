import { Module } from '@nestjs/common';
import { TikiService } from './tiki.service';
import { TikiController } from './tiki.controller';
import { HttpModule } from '@nestjs/axios';

@Module({

  imports: [HttpModule],
  providers: [TikiService],
  controllers: [TikiController]
})
export class TikiModule {}
