import { useParams } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { Skeleton, Tag } from 'antd';
import styles from './device.module.css';
import { useDeviceLocation } from '../../hooks/location/use-device-location';
import DeviceMap from '../../components/Map/device-map';
import { green, red } from '@ant-design/colors';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);

  const online = false;

  if (!device) return <Skeleton paragraph/>;

  return (
    <div className={styles.device}>
      <h2>{device.name}</h2>
      <p>{device.description}</p>
      <h3>Status: <Tag color={(online ? green : red)[3]}>{online ? 'Online' : 'Offline'}</Tag></h3>
      <h5>Device: {device.type}</h5>
      <h5>Marca: Nokia</h5>
      <h5>Modelo: Nokia</h5>
      <h5>Nombre de modelo</h5>
      <h5>IMEI</h5>

      <div>
        <DeviceMap location={location}/>
      </div>
    </div>
  );
}