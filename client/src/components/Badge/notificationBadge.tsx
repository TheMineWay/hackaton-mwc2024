import { BellOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';

const NotificationBadge: React.FC = () => (
  <Space>
    <Badge size="small" count={3}>
      <BellOutlined style={{fontSize: 18}} />
    </Badge>
  </Space>
);

export default NotificationBadge;