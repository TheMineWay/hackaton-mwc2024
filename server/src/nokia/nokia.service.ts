import { Injectable } from '@nestjs/common';

@Injectable()
export class NokiaService {
  async status() {
    return 'Up and running';
  }
}
