import { useParams } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { Skeleton } from 'antd';
import styles from './device.module.css';
import { ApiOutlined, EditOutlined, PhoneFilled } from '@ant-design/icons';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);

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

      <MapContainer style={{ height: '25em'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      
      <div className={styles.icons}>
        <PhoneFilled title="Videocall" />
        <EditOutlined title="Edit" />
        <ApiOutlined title="Disconnect" />
      </div>
    </div>
  );
}