import { useParams } from 'react-router-dom';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { Skeleton } from 'antd';
import { useDeviceLocation } from '../../hooks/location/use-device-location';
import DeviceMap from '../../components/Map/device-map';
import styles from './device.module.css';
import { ApiOutlined, DisconnectOutlined, EditOutlined, MenuOutlined, PhoneFilled } from '@ant-design/icons';
import { useDeviceStatus } from '../../hooks/status/use-device-status';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);

  const { isOnline, setOnlineStatus } = useDeviceStatus();
  
  if (!device) return <Skeleton paragraph/>;

  return (      
    <div className={styles.device}>
      <h2>{device.name}</h2>
      <p>{device.description}</p>
      <h3>Status: {isOnline ? '🟢 online' : '🔴 offline'}</h3>
      <div className={styles.device__info}>
        <div className="device__info__col">
          <h5>Dispositivo: {device.type}</h5>
          <h5>Marca: Nokia</h5>
          <h5>Modelo: Nokia</h5>
          <h5>Nombre de modelo</h5>
        </div>
        <div className="device__info__col">
          <h5>IMEI</h5>
          <h5>Conectado a: PC-Casa</h5>
          <h5>Pais: España</h5>
        </div>
      </div>
      
      <div className={styles.icons}>
        <PhoneFilled title="Videocall" />
        <EditOutlined title="Edit" />
        { isOnline ? 
          <ApiOutlined title="Connect" onClick={() => setOnlineStatus(!isOnline)} />
        : 
          <DisconnectOutlined title="Disconnect" onClick={() => setOnlineStatus(!isOnline)} />
        }
        <MenuOutlined title="Options" />
      </div>
      <div>
        <DeviceMap location={location}/>
      </div>
    </div>
  );
}
