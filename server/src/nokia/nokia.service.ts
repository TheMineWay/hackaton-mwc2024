import { ENV } from '@constants/env.constant';
import { NOKIA } from '@constants/nokia.constant';
import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class NokiaService {
  readonly apiKey: string;
  readonly apiHost = NOKIA.apiHost;

  constructor() {
    this.apiKey = ENV.NOKIA_API_KEY;
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
    return this.apiKey;
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
