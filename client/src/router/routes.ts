type Route = (params: never) => string;

export const routes = {
  HOME: () => `/`,
  MYDEVICES: () => `/my-devices`,
  ACCOUNT: () => `/account`,
  DEVICE: (id:string) => `/my-devices/${id}`,
} satisfies Record<string, Route>;
