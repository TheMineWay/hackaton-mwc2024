import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

const { Sider } = Layout;

type Props = {
  children: JSX.Element;
}


export default function Main({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  
  const items = [
    { 
      label: 'Home',
      icon: <HomeOutlined/>,
      key: 'home',
      onClick: () => navigate(routes.HOME()),
    },
    { 
      label: 'My Devices',
      icon: <DesktopOutlined />,
      key: 'my devices',
      onClick: () => navigate(routes.MYDEVICES()),
    },
    { 
      label: 'Account',
      icon: <UserOutlined />,
      key: 'account',
      onClick: () => navigate(routes.ACCOUNT()),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{ padding: '0 20px'}}>
        {children}
      </Layout>
    </Layout>
  );
}