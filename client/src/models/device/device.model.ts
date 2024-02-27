export interface DeviceModel {
  id: string;
  name: string;
  model: string;
  serialNumber: string;
  phoneNumber: string;
  description: string;
  type: "PC" | "Mobile";
}