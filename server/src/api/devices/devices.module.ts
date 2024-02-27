import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { NokiaService } from 'src/nokia/nokia.service';

@Module({
  providers: [DevicesService, NokiaService],
  controllers: [DevicesController],
})
export class DevicesModule {}
