import { ApiOutlined, DisconnectOutlined, EditOutlined, MenuOutlined, PhoneFilled } from '@ant-design/icons';
import { useDeviceLocation } from '../../hooks/location/use-device-location';
import { useDeviceStatus } from '../../hooks/status/use-device-status';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { useParams } from 'react-router-dom';
import Icon from '../../components/Icon/icon';
import { Col, Row, Skeleton, Slider, Typography } from 'antd';
import styles from './device.module.css';
import DeviceMap from '../../components/Map/device-map';
import { useDeviceBandWidth } from '../../hooks/devices/use-device-bandwidth';

const { Text } = Typography;

const phone = '';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);
  const { isOnline, setOnlineStatus } = useDeviceStatus();
  const {bandwidth, setBandwidth} = useDeviceBandWidth(id);
  
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
      <Row gutter={[12, 12]}>
        <Col xs={24} md={12}>
          <DeviceMap location={location} pointers={location ? [{lat: location.latitude, lng: location.longitude}]: []}/>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[12, 6]}>
            <Col span={24}>
              <Text>Network bandwidth</Text>
              <Slider value={bandwidth} onChange={setBandwidth} min={1} max={100} marks={{
                10: 'Economy',
                30: 'Low',
                70: 'Fast',
                85: 'Priority'
              }}/>
            </Col>
            <Col span={24}>
              
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
