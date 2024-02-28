import { ApiOutlined, ArrowDownOutlined, ArrowUpOutlined, DisconnectOutlined, EditOutlined, MenuOutlined, PhoneFilled } from '@ant-design/icons';
import { useDeviceLocation } from '../../hooks/location/use-device-location';
import { useDeviceStatus } from '../../hooks/status/use-device-status';
import { useDeviceById } from '../../hooks/devices/use-device-by-id';
import { useParams } from 'react-router-dom';
import Icon from '../../components/Icon/icon';
import { Card, Col, Row, Skeleton, Slider, Statistic, Typography } from 'antd';
import styles from './device.module.css';
import DeviceMap from '../../components/Map/device-map';
import { useDeviceBandWidth } from '../../hooks/devices/use-device-bandwidth';

const { Title } = Typography;

const phone = '';

export default function Device() {
  
  const { id } = useParams();
  if (!id) throw new Error();

  const { data: device } = useDeviceById(id);
  const { data: location } = useDeviceLocation(id);
  const { isOnline, setOnlineStatus } = useDeviceStatus(id);
  const {bandwidth, setBandwidth} = useDeviceBandWidth(id);

  if (!device) return <Skeleton paragraph/>;

  return (      
    <div className={styles.device}>
      <h2>{Icon(device.type, device.name)}</h2>
      <p>{device.description}</p>
      <h3>Status: {isOnline ? '🟢 online' : '🔴 offline'}</h3>
      <div className={styles.device__info}>
        <div className={styles.device__info__col}>
          <h5>Device: {device.type}</h5>
          <h5>Manufacturer: {device.manufacturer}</h5>
          <h5>Model Name : {device.name}</h5>
          <h5>Connection: {device.connection}</h5>
        </div>
        <div className={styles.device__info__col}>
          <h5>Connected to: PC-Casa</h5>
          <h5>Country: {`${location?.raw?.civicAddress?.A1}, ${location?.country}`}</h5>
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
          <DeviceMap location={location} pointers={location && isOnline ? [{lat: location.latitude, lng: location.longitude}]: []}/>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Title level={3}>Network bandwidth</Title>
              <Slider value={bandwidth} onChange={setBandwidth} min={1} max={100} marks={{
                10: 'Economy',
                30: 'Low',
                70: 'Fast',
                85: 'Priority'
              }}/>
            </Col>
            <Col span={24}>
            <Title level={3}>Usage report</Title>
              <Row gutter={16}>
                <Col span={12}>
                  <Card bordered={false}>
                    <Statistic
                      title="Today's usage"
                      value={5.2}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="gbps"
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card bordered={false}>
                    <Statistic
                      title="Yesterday's usage"
                      value={3.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="gbps"
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
