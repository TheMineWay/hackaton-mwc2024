import { NOKIA } from '@constants/nokia.constant';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class NokiaService {
  readonly apiKey: string;
  readonly apiHost = NOKIA.apiHost;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = configService.get('nokiaApiKey');
  }

  async getDeviceLocationByDeviceId(deviceId: string) {
    return await this.request('retrieve', {
      method: 'POST',
      data: {
        device: {
          networkAccessIdentifier: [
            '549f5eb2-96ca-4bfa-a52f-32efc7467973@testcsp.net',
          ],
        },
        maxAge: {},
      },
    });
  }

  private async request<T extends object = object>(
    path: string,
    config: Omit<AxiosRequestConfig<T>, 'url'>,
  ) {
    return await axios.request({
      ...config,
      url: `${this.apiHost}/${path}`,
      headers: {
        ...(config.headers ?? {}),
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'location-retrieval.nokia.rapidapi.com',
      },
    });
  }
}
