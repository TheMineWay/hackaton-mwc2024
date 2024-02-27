import { Module } from '@nestjs/common';
import { SlicesService } from './slices.service';
import { NokiaService } from 'src/nokia/nokia.service';
import { SlicesController } from './slices.controller';

@Module({
  providers: [SlicesService, NokiaService],
  controllers: [SlicesController],
})
export class SlicesModule {}
