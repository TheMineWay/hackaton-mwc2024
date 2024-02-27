import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':deviceId')
  async getDeviceLocation(@Param('deviceId') deviceId: string) {
    return await this.locationService.getLocationByDeviceId(deviceId);
  }
}
