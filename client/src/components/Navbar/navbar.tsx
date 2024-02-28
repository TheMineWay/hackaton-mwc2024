import { Avatar } from 'antd';
import { UserOutlined, InboxOutlined } from '@ant-design/icons';
import Badge from '../Badge/notificationBadge';
import Logo from './navbarLogo.png';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo_content">
          <div className="logo__container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
        <div className="user__container">
        <Badge />
        <InboxOutlined style={{fontSize: 20}} />
          <div className="user__avatar__container">
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
          <div className="user-name">Username</div>
        </div>  
      </div>
    </>
  )
}

export default Navbar