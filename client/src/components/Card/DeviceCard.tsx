import { Card } from 'antd';
import styles from './DeviceCard.module.css';
import Icon from '../Icon/icon';

type cardProps = {
  title: string,
  description: string,
  type: string,
}

function DeviceCard({title, description, type}: cardProps) {
  return (
    <Card title={Icon(type, title)}
          bordered={false} 
          className={styles.Card}>
    <p>{description}</p>
    </Card>
  )
}

export default DeviceCard;