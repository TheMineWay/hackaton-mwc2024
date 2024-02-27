import { useParams } from 'react-router-dom';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { Skeleton } from 'antd';
import styles from './device.module.css';
import { ApiOutlined, EditOutlined, PhoneFilled } from '@ant-design/icons';
import DeviceMap from '../../components/Map/device-map';
import { useDeviceLocation } from '../../hooks/location/use-device-location';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);

  const online = false;

  if (!device) return <Skeleton paragraph/>;

  return (      
    <div className={styles.device}>
      <div className="title">
      <h2>{device.name}</h2>

      </div>
      <p>{device.description}</p>
      <h3>Status: {online ? '🟢 online' : '🔴 offline'}</h3>
      <h5>Dispositivo: {device.type}</h5>
      <h5>Marca: Nokia</h5>
      <h5>Modelo: Nokia</h5>
      <h5>Nombre de modelo</h5>
      <h5>IMEI</h5>
      <h5>Conectado a: PC-Casa</h5>
      <h5>Pais: España</h5>

      <DeviceMap location={location} pointers={location ? [{lat: location.latitude, lng: location.longitude}]: []}/>
      
      <div className={styles.icons}>
        <PhoneFilled title="Videocall" />
        <EditOutlined title="Edit" />
        <ApiOutlined title="Disconnect" />
      </div>
    </div>
  );
}