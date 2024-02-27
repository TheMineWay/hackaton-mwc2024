import { Injectable } from '@nestjs/common';
import { NokiaService } from 'src/nokia/nokia.service';

@Injectable()
export class LocationService {
  constructor(private readonly nokiaService: NokiaService) {}

  async getLocationByDeviceId(deviceId: string) {
    return await this.nokiaService.getDeviceLocationByDeviceId(deviceId);
  }
}
