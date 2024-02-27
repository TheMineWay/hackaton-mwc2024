import { Route } from "./router";
import { routes } from "./routes";

const routes_definition: Route[] = [
  {
    path: routes.HOME(),
    loader: () => import("../pages/home.page"),
  },
  {
    path: routes.MYDEVICES(),
    loader: () => import("../pages/MyDevices/MyDevices.page"),
  },
  {
    path: routes.ACCOUNT(),
    loader: () => import("../pages/Account/account.page"),
  },
  {
    path: routes.DEVICE(':id'),
    loader: () => import("../pages/Device/device.page"),
  },
];

export default routes_definition;