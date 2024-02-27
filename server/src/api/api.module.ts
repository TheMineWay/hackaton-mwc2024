import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { DevicesModule } from './devices/devices.module';
import { SlicesModule } from './slices/slices.module';

@Module({
  imports: [LocationModule, DevicesModule, SlicesModule],
})
export class ApiModule {}
