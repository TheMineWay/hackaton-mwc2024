import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { DevicesModule } from './devices/devices.module';
import { SlicesModule } from './slices/slices.module';
import { QodModule } from './qod/qod.module';

@Module({
  imports: [LocationModule, DevicesModule, SlicesModule, QodModule],
})
export class ApiModule {}
