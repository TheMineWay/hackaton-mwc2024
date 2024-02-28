import { Link } from "react-router-dom";
import Card from '../../components/Card/DeviceCard';
import styles from './MyDevices.module.css';
import { useAllDevices } from "../../hooks/devices/use-all-devices";
import { routes } from "../../router/routes";
import { Skeleton, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

export default function MyDevices() {

  const { data: devices } = useAllDevices();

    return (
      <div className={styles.devices__container}>
        {devices ? devices.map((device) => (
          <Link to={routes.DEVICE(device.id)} key={device.id}>
            <Card title={device.name} description={device.description} type={device.type} />
          </Link>
        ))
        : 
          <Skeleton />
        }
      <Button type="primary" style={{background: '#7cb305', color: "#fff"}}><PlusCircleFilled /> Add Device</Button>
      </div>
    );
}