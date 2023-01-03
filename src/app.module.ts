import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TikiModule } from './tiki/tiki.module';

@Module({
  imports: [TikiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
