export interface DeviceModel {
  id: string;
  name: string;
  model: string;
  serialNumber: string;
  phoneNumber: string;
  description: string;
  connection: string;
  resolution: string;
  operatingSystem: string;
  storage: string;
  type: "PC" | "Mobile" | "Camera";
}
