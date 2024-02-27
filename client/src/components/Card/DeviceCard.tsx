import { Card } from 'antd';
import styles from './DeviceCard.module.css';
import { DesktopOutlined, MobileOutlined } from '@ant-design/icons';

type cardProps = {
  title: string,
  description: string,
  type: string,
}

function DeviceCard({title, description, type}: cardProps) {
  return (
    <Card title={
      type == "Mobile" ? 
      <>
        <MobileOutlined /> {title}
      </> 
      : 
      <>
        <DesktopOutlined /> {title}
      </>
      } 
      bordered={false} 
      className={styles.Card}>
        <p>{description}</p>
    </Card>
  )
}

export default DeviceCard;