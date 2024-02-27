import { Injectable } from '@nestjs/common';
import { NokiaService } from 'src/nokia/nokia.service';

@Injectable()
export class LocationService {
  constructor(private readonly nokiaService: NokiaService) {}

  async getLocationByDeviceId(deviceId: string) {
    const info = await this.nokiaService.getDeviceLocationByDeviceId(deviceId);

    return {
      latitude: info.area.center.latitude,
      longitude: info.area.center.longitude,
      radius: info.area.radius,
      country: info.civicAddress?.country,
      lastLocationTime: info.lastLocationTime,
      raw: info,
    };
  }
}
