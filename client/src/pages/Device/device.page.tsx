import { ApiOutlined, DisconnectOutlined, EditOutlined, MenuOutlined, PhoneFilled } from '@ant-design/icons';
import { useDeviceLocation } from '../../hooks/location/use-device-location';
import { useDeviceStatus } from '../../hooks/status/use-device-status';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import Icon from '../../components/Icon/icon';
import styles from './device.module.css';
import DeviceMap from '../../components/Map/device-map';

const phone = '';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);
  const { isOnline, setOnlineStatus } = useDeviceStatus();
  
  if (!device) return <Skeleton paragraph/>;

  return (      
    <div className={styles.device}>
      <h2>{Icon(device.type, device.name)}</h2>
      <p>{device.description}</p>
      <h3>Status: {isOnline ? '🟢 online' : '🔴 offline'}</h3>
      <div className={styles.device__info}>
        <div className={styles.device__info__col}>
          <h5>Dispositivo: {device.type}</h5>
          <h5>Modelo: Nokia</h5>
          <h5>Nombre de modelo: {device.name}</h5>
          <h5>Connection: {device.connection}</h5>
        </div>
        <div className={styles.device__info__col}>
          <h5>Conectado a: PC-Casa</h5>
          <h5>Pais: España</h5>
          {
            device.operatingSystem ? 
            <>
              <h5>Operative System: {device.operatingSystem}</h5> 
              <h5>Storage: {device.storage}</h5> 
            </>
            :
            <h5>Resolution: {device.resolution}</h5>
          }
        </div>
      </div>
      
      <div className={styles.icons}>
        <PhoneFilled title="Videocall" onClick={() => window.open('tel:' + phone)}/>
        <EditOutlined title="Edit" />
        { 
        isOnline ? 
          <ApiOutlined title="Connect" onClick={() => setOnlineStatus(!isOnline)} />
        : 
          <DisconnectOutlined title="Disconnect" onClick={() => setOnlineStatus(!isOnline)} />
        }
        <MenuOutlined title="Options" />
      </div>
      <div>
        <DeviceMap location={location} pointers={location && isOnline ? [{lat: location.latitude, lng: location.longitude}]: []}/>
      </div>
    </div>
  );
}
