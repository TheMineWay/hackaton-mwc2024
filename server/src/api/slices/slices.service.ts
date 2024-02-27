import { Injectable } from '@nestjs/common';
import { NokiaService } from 'src/nokia/nokia.service';

@Injectable()
export class SlicesService {
  constructor(private readonly nokiaService: NokiaService) {}

  async createSlice() {}
}
