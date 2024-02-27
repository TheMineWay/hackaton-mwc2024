import { Controller, Post } from '@nestjs/common';
import { SlicesService } from './slices.service';

@Controller('slices')
export class SlicesController {
  constructor(private readonly slicesService: SlicesService) {}

  @Post()
  async createSlice() {
    return await this.slicesService.createSlice();
  }
}
