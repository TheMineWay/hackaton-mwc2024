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
      method: 'post',
      data: {
        device: {
          networkAccessIdentifier: {},
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
