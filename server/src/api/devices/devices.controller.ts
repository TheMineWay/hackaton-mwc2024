import { Controller, Get } from '@nestjs/common';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get('all')
  async getAllDevices() {
    return await this.devicesService.getAllDevices();
  }
}
