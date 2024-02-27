import { Card } from 'antd';
import styles from './DeviceCard.module.css';
import { CameraOutlined, DesktopOutlined, MobileOutlined } from '@ant-design/icons';

type cardProps = {
  title: string,
  description: string,
  type: string,
}

function DeviceCard({title, description, type}: cardProps) {

  const setIcon = () => {
    switch(type) {
      case 'Mobile': 
          return (
              <>
                  <MobileOutlined /> {title}
              </>
          );
      case 'PC': 
          return (
              <>
                  <DesktopOutlined /> {title}
              </>
          );
      case 'Camera': 
          return (
              <>
                  <CameraOutlined /> {title}
              </>
          );
      default:
          return null;
   }
  }

  return (
    <Card title={setIcon()}
          bordered={false} 
          className={styles.Card}>
    <p>{description}</p>
    </Card>
  )
}

export default DeviceCard;