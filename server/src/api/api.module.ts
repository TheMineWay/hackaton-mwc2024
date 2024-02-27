import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [LocationModule, DevicesModule],
})
export class ApiModule {}
