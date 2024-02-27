import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  async getAllDevices() {
    return await this.devicesService.getAllDevices();
  }

  @Get('info/all')
  async getAllDevicesInfo() {
    return await this.devicesService.getAllDecicesInfo();
  }

  @Get(':id')
  async getDeviceById(@Param('id') id: string) {
    const device = await this.devicesService.findById(id);
    if (!device) throw new NotFoundException();
    return device;
  }
}
