import { Module } from '@nestjs/common';
import { QodService } from './qod.service';
import { NokiaService } from 'src/nokia/nokia.service';
import { QodController } from './qod.controller';

@Module({
  providers: [QodService, NokiaService],
  controllers: [QodController],
})
export class QodModule {}
