import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { NokiaService } from 'src/nokia/nokia.service';
import { LocationService } from '@api/location/location.service';

@Module({
  providers: [DevicesService, NokiaService, LocationService],
  controllers: [DevicesController],
})
export class DevicesModule {}
