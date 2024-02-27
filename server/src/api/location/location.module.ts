import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { NokiaService } from 'src/nokia/nokia.service';

@Module({
  providers: [LocationService, NokiaService],
  controllers: [LocationController],
})
export class LocationModule {}
