import { Injectable } from '@nestjs/common';
import { NokiaService } from 'src/nokia/nokia.service';

@Injectable()
export class DevicesService {
  constructor(private readonly nokiaService: NokiaService) {}
}
