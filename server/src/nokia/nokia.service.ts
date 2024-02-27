import { ENV } from '@constants/env.constant';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NokiaService {
  readonly nokiaApiKey: string;

  constructor() {
    this.nokiaApiKey = ENV.NOKIA_API_KEY;
  }

  async getDeviceLocationByDeviceId(deviceId: string) {
    return deviceId;
  }
}
