import { Injectable } from '@nestjs/common';
import { DEVICES_MOCK } from 'src/moks/devices/devices.mock';
import { NokiaService } from 'src/nokia/nokia.service';

@Injectable()
export class DevicesService {
  constructor(private readonly nokiaService: NokiaService) {}

  async getAllDevices() {
    return DEVICES_MOCK;
  }

  async findById(id: string) {
    return DEVICES_MOCK.filter(({ id: d_id }) => d_id === id)?.[0];
  }
}
