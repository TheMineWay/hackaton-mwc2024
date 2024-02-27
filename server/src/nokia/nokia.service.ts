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
    return await this.request<{
      lastLocationTime: string;
      area: {
        areaType: string;
        center: {
          latitude: number;
          longitude: number;
        };
        radius: number;
      };
      civicAddress?: {
        country: string;
        A1?: string;
        A2?: string;
      };
    }>('retrieve', {
      method: 'POST',
      data: {
        device: {
          networkAccessIdentifier: deviceId,
        },
        maxAge: 1000,
      },
    });
  }

  private async request<T extends object = object>(
    path: string,
    config: Omit<AxiosRequestConfig, 'url'>,
  ) {
    return (
      await axios.request<T>({
        ...config,
        url: `${this.apiHost}/${path}`,
        headers: {
          ...(config.headers ?? {}),
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': 'location-retrieval.nokia.rapidapi.com',
        },
      })
    ).data;
  }
}
