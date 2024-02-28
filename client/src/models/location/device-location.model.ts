export interface DeviceLocationModel {
  latitude: number;
  longitude: number;
  country: string;
  raw?: {
    civicAddress?: {
      A1?: string;
    };
    lastLocationTime?: string;
  };
}
