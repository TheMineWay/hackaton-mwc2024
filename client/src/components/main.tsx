import { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router/routes';

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  children: JSX.Element;
}

export default function Main({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[{
          label: 'Home',
          icon: <HomeOutlined/>,
          key: 'home',
          onClick: () => navigate(routes.HOME()),
        }]} />
      </Sider>
      <Layout>
        {children}
      </Layout>
    </Layout>
  );
}